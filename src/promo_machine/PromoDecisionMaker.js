// Import external libraries
const _ = require('underscore');

// Import Database for training data
const FIXTURES_TAXI = require('../references/FIXTURES_TAXI.js')
const TAXI_TAXI = require('../references/TAXI_TAXI.js')
const FnB_FAST_FOOD = require('../references/F&B_FAST_FOOD.js')
const FnB_BUBBLE_COFFEE_YOGHURT_ICE = require('../references/F&B_BUBBLE_COFFEE_YOGHURT_ICE.js')

// Import Libraries
const PromoDecisionMakerPrepper = new require('./PromoDecisionMakerPrepper.js');
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
    this._promoDecisionMakerPrepper = new PromoDecisionMakerPrepper();
    this._normalizer = new Normalizer();
    this._normalizer.attachStemmer(); // mainly used to apply tokenizeAndStem(false) to all Strings

    this._bayes = new BayesClassifier();
    this._evaluator = new Evaluator();

    this._trainingSet = null;
  }

  //==============================================================
  // TRAINING AND CLASSIFICATION
  //==============================================================
  /**
   * Classify FB posts and get a list of promo objects
   *
   * @param {Boolean} printAccReport True if diagnostic report is to be printed
   * @param {[Array]} unclassifiedPosts List of unclassified FB Posts
   * @returns {[Array]} [{
   *                       originalMsg: 'aces b',
   *                       normalizedStr: 'ace b',
   *                       tokens: ['ace', 'b'],
   *                       labels: [{ "label": "not-promo", "value": 2.02002e-8 },
   *                                { "label": "promo", "value": 1.02002e-9 }],
   *                    }, ...]
   */
  getPromosOnly(printAccReport, unclassifiedPosts) {
    this.trainClassifier();
    let classifiedPosts = this.classify(this._promoDecisionMakerPrepper.composeFBPostPromos(unclassifiedPosts));

    return classifiedPosts.filter((post) => {
      return this.isClassifedAsPromo(post);
    });
  }

  isClassifedAsPromo(classifiedPost) {
    return classifiedPost['labels'][0]['label'] === 'promo';
  }

  /**
   * Trains the Bayes Classifier with training data from /references
   */
  trainClassifier() {
    // Train classifier
    this._trainingSet = this.prepTrainingData();
    this._bayes.setTraining(this._trainingSet);
    this._bayes.train();
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
    let classifiedPosts = [];

    // Constructing classifications that keep some old data
    for (let i = 0; i < objsToClassify.length; i++) {
      let classified = {};
      let objToClassify = objsToClassify[i];
      for (let key in objToClassify) {
        classified[key] = objToClassify[key];
      }

      classified.originalMsg = objToClassify['originalMsg'];
      classified.normalizedStr = objToClassify['normalizedStr'];
      classified.tokens = objToClassify['tokens'];
      classified.labels = this._bayes.classifyPostMsg(objToClassify['normalizedStr']);

      classifiedPosts.push(classified);
    }

    return classifiedPosts;
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
  prepTrainingData() {
    // Get brand objects
    let FnBCategoriesFastFood = this.getListOfBrandObjs(FnB_FAST_FOOD, 'F_&_B', 'fast_food');
    let FnBCategoriesBubbleTea = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'bubble_tea');
    let FnBCategoriesCoffee = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'coffee');
    let FnBCategoriesYoghurt = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'yoghurt');
    let FnBCategoriesIceCream = this.getListOfBrandObjs(FnB_BUBBLE_COFFEE_YOGHURT_ICE, 'F_&_B', 'ice_cream');
    let TaxiCategories = this.getListOfBrandObjs(TAXI_TAXI, 'taxi', 'taxi');

    // From each category we want to train and test, get tokenized msgs and labels
    let tokenizedFastFood = this.getTokenizedTrainDataFromCategory(FnBCategoriesFastFood);
    let tokenizedBubbleTea = this.getTokenizedTrainDataFromCategory(FnBCategoriesBubbleTea);
    let tokenizedCoffee = this.getTokenizedTrainDataFromCategory(FnBCategoriesCoffee);
    let tokenizedYoghurt = this.getTokenizedTrainDataFromCategory(FnBCategoriesYoghurt);
    let tokenizedIceCream = this.getTokenizedTrainDataFromCategory(FnBCategoriesIceCream);
    let tokenizedTaxi = this.getTokenizedTrainDataFromCategory(TaxiCategories);

    let trainData = _.flatten([tokenizedBubbleTea, tokenizedYoghurt, tokenizedCoffee, tokenizedIceCream, tokenizedFastFood, tokenizedTaxi], true);

    return trainData;
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
        tokenizedTrainData.push({
          originalMsg: post['text'],
          tokens: post['text'].tokenizeAndStem(false),
          label: post['label'],
        });
      }
    }
    return tokenizedTrainData;
  }
}
