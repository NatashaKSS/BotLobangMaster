// Import libraries
const express = require('express');
const bodyParser = require('body-parser');

// Import other internal dependencies
const SecurityHandler = require('./SecurityHandler.js');
const FBPostsRetriever = require('./retriever/FBPostsRetriever.js');
const PromoMachine = require('./promo_machine/PromoMachine.js');

// Import databases
const Brands = require('./references/brands.js');
const ClassificationLabels = require('./references/brands.js');

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

    // Get list of brands to query posts from
    let FnBCategories = Brands['brands']['F_&_B']['category'];
    let listOfFastFoodBrands = Object.keys(FnBCategories['fast_food']);
    let listOfBubbleTeaBrands = Object.keys(FnBCategories['bubble_tea']);

    // GET LIST OF TEXT MSGS
    let ClassLabels = require('./references/classification_labels.js');
    let FnBCategories_ClassLabels = ClassLabels['classifications']['F_&_B']['category'];
    let FastFood_ClassLabels = FnBCategories_ClassLabels['fast_food'];
    let FastFoodBrands = Object.keys(FastFood_ClassLabels);
    // console.log(FastFood_ClassLabels['kfc']);
    // console.log(FastFoodBrands);

    // NORMALIZATION
    let Normalizer = require('./NLP/Normalizer.js');
    let normalizerInstance = new Normalizer().attachStemmer();
    let tokenizedTrainData = [];

    for (let i = 0; i < FastFoodBrands.length; i++) {
      for (let j = 0; j < FastFood_ClassLabels[FastFoodBrands[i]].length; j++) {
        let entry = FastFood_ClassLabels[FastFoodBrands[i]][j];
        let msg = entry['text'];
        let label = entry['label'];

        let tokenizedMsg = msg.tokenizeAndStem();

        tokenizedTrainData.push({
          tokens: tokenizedMsg,
          label: label
        })
      }
    }

    // CLASSIFICATION
    let BayesClassifier = require('./NLP/BayesClassifier.js');
    let bayes = new BayesClassifier();

    bayes.setTraining(tokenizedTrainData);
    bayes.train();

    let trial = "The essence of winter captured in a cup. Is there a better way to celebrate this Holiday season than by sipping on a warm and frothy cup of a traditional tea? Yes, we didn’t think so either. Go and grab a cup of our Winter Dream Tea Latte today! #CoffeeBeanSG";
    console.log(trial.tokenizeAndStem());
    console.log(bayes.classifyAndGetLabel(trial.tokenizeAndStem()));
    console.log(bayes.classifyPostMsg(trial));

    // DO ACCURACY REPORT
    // For those that you got wrong, print sections:
    // 1. Classified as promos but were actually not-promos
    // 2. Classified as not-promos but were actually promos
    // Print original text and normalized text

    // END CLASSIFICATION REPORT

    FBPostsRetriever.getListOfNodes(
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

    // ======================================
    // SPIN UP THE SERVER
    // ======================================
    this._app.listen(this._app.get('port'), function() {
      console.log('\nRUNNING ON PORT\n', app.get('port'));
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
