const express = require('express');
const bodyParser = require('body-parser');

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
    let SecurityHandler = require('./verification.js');
    this._securityHandler = new SecurityHandler(this._app);

    // Set up ParseHub
    let ParseHub = require('./ParseHub.js');
    this._parsehub = new ParseHub();
  }

  run() {
    let app = this._app;
    this._app.set('port', (process.env.PORT || 5005));

    // Index route
    this._app.get('/', function (req, res) {
    	res.send('Hello World! I am BotLobangMaster!');
    })

    // Check if all config keys exist since we need every single one of them
    this._securityHandler.allConfigsExist();

    // ======================================
    // ALL MAIN FUNCTIONS OF BotLobangMaster
    // ======================================
    // Retrieve all job results from ParseHub
    this._parsehub.getRunInfo();

    // Set up Express server middleware stack
    this.setupMiddleware();

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
