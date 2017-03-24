// Import libraries
const express = require('express');
const bodyParser = require('body-parser');

// Import other internal dependencies
const SecurityHandler = require('./SecurityHandler.js');
const FBPostsRetriever = require('./retriever/FBPostsRetriever.js');
const PromoMachine = require('./PromoMachine/PromoMachine.js');

// Import database
const Brands = require('./references/brands.js');

// Import constants
const constants = require('./lib/constants.js');

/**
 * This class defines BotHub - The IQ of TaxiBot.
 *
 * Performs logical computation of user commands and interacts with third-party
 * APIs (e.g. API.ai and Dashbot.io).
 */
module.exports = class BotHub {
  constructor () {
    this._app = express();

    // Set up SecurityHandler
    this._SecurityHandler = new SecurityHandler(this._app);
    this._SecurityHandler.allConfigsExist();

    // Set up FBPostsRetriever
    this._FBPostsRetriever = new FBPostsRetriever();

    // Set up PromoMachine
    this._PromoMachine = new PromoMachine();
  }

  run() {
    let app = this._app;
    this._app.set('port', (process.env.PORT || 5005));

    // Index route
    this._app.get('/', function (req, res) {
    	res.send('Hello World! I am BotLobangMaster!');
    })

    // Set up Express server middleware stack
    this.setupMiddleware();

    // ======================================
    // ALL MAIN FUNCTIONS OF BotLobangMaster
    // ======================================
    const FBPostsRetriever = this._FBPostsRetriever;
    FBPostsRetriever.getNode(
      constants.FB_QUERY_OPTIONS,
      "PizzaHutSingapore",
      constants.FB_QUERY_PARAMS_URL, function(result) {
        FBPostsRetriever.printPostFieldsToConsole(result);
      }
    );


    // ======================================
    // SPIN UP THE SERVER
    // ======================================
    this._app.listen(this._app.get('port'), function () {
      console.log('\nRUNNING ON PORT\n', app.get('port'));
    })
  }

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
