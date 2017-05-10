// Import external libraries
const _ = require('underscore');

// Import Database for training data
const FIXTURES_TAXI = require('../references/FIXTURES_TAXI.js')
const TAXI_TAXI = require('../references/TAXI_TAXI.js')
const FnB_FAST_FOOD = require('../references/F&B_FAST_FOOD.js')
const FnB_BUBBLE_COFFEE_YOGHURT_ICE = require('../references/F&B_BUBBLE_COFFEE_YOGHURT_ICE.js')

// Import Libraries
const Normalizer = new require('../NLP/Normalizer.js');
const BayesClassifier = new require('../NLP/BayesClassifier.js');
const Evaluator = new require('../NLP/Evaluator.js');

/**
 * Decides whether a FB post message is a promo or not
 *
 * Main entry point: getPromosOnly
 */
module.exports = class PromoDecisionMaker {
  constructor() {
    this._normalizer = new Normalizer();
    this._normalizer.attachStemmer(); // mainly used to apply tokenizeAndStem(false) to all Strings

    this._bayes = new BayesClassifier();
    this._evaluator = new Evaluator();

    this._trainAndTestObj = null;
  }

  //==============================================================
  // GETTING PROMOS
  //==============================================================
  /**
   * Classify FB posts and get a list of promo objects the Promo
   * Decision-Maker thinks are promos.
   * @param {Boolean} printAccReport True if diagnostic report is to be printed
   * @param {[Array]} unclassifiedPosts TODO: MUST BE IN THE TEST OBJ'S SCHEMA
   * @returns {[Array]} [{
   *                       originalMsg: 'aces b',
   *                       normalizedStr: 'ace b',
   *                       tokens: ['ace', 'b'],
   *                       labels: [{ "label": "not-promo", "value": 2.02002e-8 },
   *                                { "label": "promo", "value": 1.02002e-9 }],
   *                    }, ...]
   */
  getPromosOnly(printAccReport, unclassifiedPosts) {
    let classifiedPosts = this.trainClassifier(printAccReport, unclassifiedPosts);

    // Comment this out if assessing acc report and not working on actual
    // FB posts. Then the above classifiedPosts will be used instead.
    classifiedPosts = this.classify(this.composeFBPostPromos(unclassifiedPosts));

    let promos = [];
    for (let i = 0; i < classifiedPosts.length; i++) {
      if (this.isClassifedAsPromo(classifiedPosts[i])) {
        promos.push(classifiedPosts[i]);
      }
    }

    return promos;
  }

  isClassifedAsPromo(classifiedPost) {
    if (classifiedPost['labels'][0]['label'] === 'promo') {
      return true;
    } else {
      return false;
    }
  }

  //==============================================================
  // TRAINING AND CLASSIFICATION
  //==============================================================
  /**
   * Trains the Bayes Classifier and has the option of printing a
   * diagnostic report.
   *
   * TODO: Remember that test data is essentially unseen data, AKA unclassifiedPosts
   *
   * @param {Boolean} printAccReport True if diagnostic report is to be printed
   * @param {[Array]} unclassifiedPosts TODO: MUST BE IN THE TEST OBJ'S SCHEMA
   * @returns {[Array]} [{
   *                       originalMsg: 'aces b',
   *                       normalizedStr: 'ace b',
   *                       tokens: ['ace', 'b'],
   *                       labels: [{ "label": "not-promo", "value": 2.02002e-8 },
   *                                { "label": "promo", "value": 1.02002e-9 }],
   *                    }, ...]
   */
  trainClassifier(printAccReport, unclassifiedPosts) {
    this._trainAndTestObj = this.prepTrainingAndTestData();

    // Train classifier
    this._bayes.setTraining(this._trainAndTestObj['train']);
    this._bayes.train();

    // Test the trained classifier
    let testDataObjs = this._trainAndTestObj['test']; // Array of { originalMsg: 'a b', tokens: ['a', 'b'], label: 'not-promo' }

    // Prep objects to classify
    let objsToClassify = this.composeClassificationObjs(testDataObjs);
    let classificationResults = this.classify(objsToClassify);

    if (printAccReport) {
      // Print the classification report
      this._evaluator.printClassifierAccuracyReport(classificationResults, testDataObjs);
    }

    return classificationResults;
  }

  /**
   * Composes FB post objects to prepare the classification object for the
   * BayesClassifier
   *
   * @param  {[Array]} FBposts
   * {
       message: 'FREE RIDES! Our elevated GiveGet ofe perk! Learn more: t.uber.com/givegetsg',
       full_picture: 'https://scontent.xx.fbcdn.net/v/t1.0-9/p720x720/18056948_768276946668145_1173779969895618998_n.png?oh=8a19e78bf3ca4611dd85e6bdc969517c&oe=597A4798',
       link: 'https://www.facebook.com/UberSingapore/photos/a.272297529599425.1073741828.271012636394581/768276946668145/?type=3',
       id: '271012636394581_768276946668145',
       attachments: [Object]
     }
   * @return {[Array]}         [{ originalMsg: 'aces b',
   *                              normalizedStr: 'ace b',
   *                              tokens: ['ace', 'b'],, ...]
   */
  composeFBPostPromos(FBposts) {
    let composedDataObjs = [];

    for (let i = 0; i < FBposts.length; i++) {
      let FBpost = FBposts[i].message;
      if (FBpost) {
        let normalizedTokens = FBposts[i].message.tokenizeAndStem(false);
        composedDataObjs.push({
          originalMsg: FBposts[i].message,
          normalizedStr: this.stitchTokensIntoString({ tokens: normalizedTokens }),
          tokens: normalizedTokens,
          brand: FBposts[i].brand,
        });
      }
    }

    return composedDataObjs;
  }

  /**
   * Composes objects for classification into a full package containing
   * it's original and new labelled classification. Prepares the
   * classification object to be fed into the BayesClassifier.
   *
   * @param {[Array]} dataObjs [{ originalMsg: 'aces b',
   *                               tokens: ['ace', 'b'],
   *                               label: 'not-promo' }, ...]
   * @returns {[Array]} [{ originalMsg: 'aces b',
   *                       normalizedStr: 'ace b',
   *                       tokens: ['ace', 'b'],
   *                       label: 'not-promo' }, ...]
   */
  composeClassificationObjs(dataObjs) {
    let composedDataObjs = [];
    let stitchedTokens = '';

    for (let i = 0; i < dataObjs.length; i++) {
      stitchedTokens = this.stitchTokensIntoString(dataObjs[i]);
      composedDataObjs.push({
        originalMsg: dataObjs[i]['originalMsg'],
        normalizedStr: stitchedTokens,
        tokens: dataObjs[i]['tokens'],
        label: dataObjs[i]['label'],
      });
    }

    return composedDataObjs;
  }

  /**
   * Prepares training and testing data formats fit for classification by
   * normalizing each FB post's msg into their tokenized form
   *
   * @param {[Array]} objsToClassify [{ originalMsg: 'aces b',
   *                                    normalizedStr: 'ace b',
   *                                    tokens: ['ace', 'b'],
   *                                    label: 'not-promo' }, ...]
   * @returns {Object} [{ ...objToClassify,
   *                      labels: [{ "label": "not-promo", "value": 2.02002e-8 },
   *                               { "label": "promo", "value": 1.02002e-9 }] }]
   */
  classify(objsToClassify) {
    let classified = [];

    // Test on taxi test set of tokenized strings
    for (let i = 0; i < objsToClassify.length; i++) {
      classified.push({
        brand: objsToClassify[i]['brand'],
        originalMsg: objsToClassify[i]['originalMsg'],
        normalizedStr: objsToClassify[i]['normalizedStr'],
        tokens: objsToClassify[i]['tokens'],
        labels: this._bayes.classifyPostMsg(objsToClassify[i]['normalizedStr'])
      });
    }
    return classified;
  }

  //==============================================================
  // DATA PREPARATION
  //==============================================================
  /**
   * Prepares training and testing data formats fit for classification by
   * normalizing each FB post's msg into their tokenized form
   *
   * @returns {Object} { train: {tokens: ['a', 'b'], label: 'not-promo'} ,
   *                     test: {tokens: ['a', 'b'], label: 'not-promo'} }
   */
  prepTrainingAndTestData() {
    // Get brand objects
    let FnBCategoriesFastFood = this.getListOfBrandObjs(FnB_FAST_FOOD, 'F_&_B', 'fast_food');
    let FnBCategoriesBubbleTea = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'bubble_tea');
    let FnBCategoriesCoffee = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'coffee');
    let FnBCategoriesYoghurt = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'yoghurt');
    let FnBCategoriesIceCream = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'ice_cream');
    let TaxiCategories = this.getListOfBrandObjs(TAXI_TAXI, 'taxi', 'taxi');

    // Get brand objs fixtures
    let Fixtures_TAXI = this.getListOfBrandObjs(FIXTURES_TAXI, 'taxi', 'taxi');

    // From each category we want to train and test, get tokenized msgs and labels
    let tokenizedFastFood = this.getTokenizedTrainDataFromCategory(FnBCategoriesFastFood);
    let tokenizedBubbleTea = this.getTokenizedTrainDataFromCategory(FnBCategoriesBubbleTea);
    let tokenizedCoffee = this.getTokenizedTrainDataFromCategory(FnBCategoriesCoffee);
    let tokenizedYoghurt = this.getTokenizedTrainDataFromCategory(FnBCategoriesYoghurt);
    let tokenizedIceCream = this.getTokenizedTrainDataFromCategory(FnBCategoriesIceCream);
    let tokenizedTaxi = this.getTokenizedTrainDataFromCategory(TaxiCategories);

    // Tokenized taxi fixtures
    let tokenizedTaxiFixtures = this.getTokenizedTrainDataFromCategory(Fixtures_TAXI);

    let trainData = _.flatten([tokenizedBubbleTea, tokenizedYoghurt, tokenizedCoffee,
                               tokenizedIceCream, tokenizedFastFood, tokenizedTaxi], true);

    let trainTestObj = {
      train: trainData,
      test: tokenizedTaxi // TODO: Check if you're training on this list too to avoid overfitting during testing
    }

    return trainTestObj;
  }

  /**
   * Get list of brand objects from training data references
   *
   * @param {[Object]} db Root Object in data file
   * @param {[Array]} classification String classification, e.g. "F_&_B"
   * @param {[Array]} category String category, e.g. "bubble_tea", "coffee"
   * @return {[Object]} Brand object
   *    {
   *      uber: {
   *        "text": "some text",
   *        "label": "not-promo"
   *      },
   *      "grab": {
   *        "text": "some text",
   *        "label": "promo"
   *      }
   *    }
   */
  getListOfBrandObjs(db, classification, category) {
    return db['classifications'][classification]['category'][category];
  }

  /**
   * Tokenizes and stems an FB post's msg and returns an object that the
   * classifier can understand.
   *
   * @param {[Array]} brandObjs Array of { text: "promo party!", label: 'promo' }
   * @return {[String]} Array of
   *   {
   *      originalMsg: "promo party!",
   *      tokens: ['promo', 'parti'],
   *      label: 'promo'
   *   }
   */
  getTokenizedTrainDataFromCategory(brandObjs) {
    let brandNames = Object.keys(brandObjs);
    let tokenizedTrainData = [];

    for (let i = 0; i < brandNames.length; i++) {
      for (let j = 0; j < brandObjs[brandNames[i]].length; j++) {
        let post = brandObjs[brandNames[i]][j];
        let msg = post['text'];
        let label = post['label'];

        let tokenizedMsg = msg.tokenizeAndStem(false);

        tokenizedTrainData.push({
          originalMsg: msg,
          tokens: tokenizedMsg,
          label: label,
        });
      }
    }
    return tokenizedTrainData;
  }

  /**
   * Stitches array of promo objects up and returns a list of each of their
   * accumulatedStrs
   *
   * @param {[Array]} listOfTokenizedData Array of
   *          { originalMsg: 'a b', tokens: ['a', 'b'], label: 'not-promo' }
   * @return {[String]} ['a b', 'b c', 'c d'...]
   */
  stitchIntoString(listOfTokenizedData) {
    let listOfStrs = [];
    for (let i = 0; i < listOfTokenizedData.length; i++) {
      listOfStrs.push(this.stitchTokensIntoString(listOfTokenizedData[i]));
    }
    return listOfStrs;
  }

  /**
   * Stitches object of tokens up into a String and returns the string
   *
   * @param {[Object]} tokenizedData { originalMsg: 'a b', tokens: ['a', 'b'], label: 'not-promo' }
   * @return {[String]} 'a b'
   */
  stitchTokensIntoString(tokenizedData) {
    let accumulatedStr = "";
    let tokens = tokenizedData['tokens'];
    for (let i = 0; i < tokens.length; i++) {
      accumulatedStr += tokens[i] + " ";
    }
    return accumulatedStr;
  }

}
