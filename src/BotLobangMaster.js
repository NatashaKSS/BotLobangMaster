// Import libraries
const express = require('express');
const bodyParser = require('body-parser');

// Import other internal dependencies
const ConfigHandler = require('./ConfigHandler.js');
const FBPostsRetriever = require('./retriever/FBPostsRetriever.js');
const PromoMachine = require('./promo_machine/PromoMachine.js');

// Import databases
const Brands = require('./references/lookup/brands.js');

// Import constants
const constants = require('./lib/constants.js');

/**
 *
 */
module.exports = class BotHub {
  constructor () {
    this._app = express();

    // Set up dependencies
    this._ConfigHandler = (new ConfigHandler()).allConfigsExist();
    this._FBPostsRetriever = new FBPostsRetriever();
    this._PromoMachine = new PromoMachine();
  }

  run() {
    this._app.set('port', (process.env.PORT || 5005));

    // Index route
    this._app.get('/', (req, res) => {
    	res.send('Hello World! I am BotLobangMaster!');
    })

    // Set up Express server middleware stack
    this.setupMiddleware();

    // ======================================
    // ALL MAIN FUNCTIONS OF BotLobangMaster
    // ======================================
    this._FBPostsRetriever.getListOfNodes(
      constants.FB_QUERY_OPTIONS,
      ["koithesg"],
      constants.FB_QUERY_PARAMS_URL,
      function(posts) {
        console.log("========================================");
        console.log("GET LIST OF POSTS FROM ALL BRANDS:");
        console.log(posts['koithesg'][0]);
        console.log("========================================");
      }
    );

    // Generate promos from the retrieved promos
    this._PromoMachine.generatePromos([]);

    // ======================================
    // SPIN UP THE SERVER
    // ======================================
    this._app.listen(this._app.get('port'), () => {
      console.log('\nRUNNING ON PORT\n', this._app.get('port'));
    })
  }

  // ===================================================
  // SERVER CONFIG SETUPS
  // ===================================================
  setupMiddleware() {
    // Serve static files in the public directory
    this._app.use(express.static('public'));

    // Process application/x-www-form-urlencoded
    this._app.use(bodyParser.urlencoded({
    	extended: false
    }))

    // Process application/json
    this._app.use(bodyParser.json())
  }
}
