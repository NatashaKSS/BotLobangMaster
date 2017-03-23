const express = require('express');
const bodyParser = require('body-parser');
const SecurityHandler = require('./SecurityHandler.js');
const ParseHub = require('./web_crawling/ParseHub.js');
const Translator = require('./web_crawling/Translator.js');

const Brands = require('./references/brands.js');

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
    this._securityHandler = new SecurityHandler(this._app);

    // Check if all config keys exist
    this._securityHandler.allConfigsExist();

    // Set up ParseHub
    this._parsehub = new ParseHub();

    // Set up the Translator
    this._translator = new Translator();
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

    // Spin up the server
    this._app.listen(this._app.get('port'), function () {
      console.log('RUNNING ON PORT', app.get('port'));
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
