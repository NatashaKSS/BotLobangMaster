
// Import Database for training data
const TAXI_TAXI = require('../references/TAXI_TAXI.js')
const FnB_FAST_FOOD = require('../references/F&B_FAST_FOOD.js')
const FnB_BUBBLE_COFFEE_YOGHURT_ICE = require('../references/F&B_BUBBLE_COFFEE_YOGHURT_ICE.js')

// Import Libraries
const Normalizer = new require('../NLP/Normalizer.js');

/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class PromoMachine {
  constructor() {
    this._normalizer = new Normalizer();
    this._normalizer.attachStemmer(); // mainly used to apply tokenizeAndStem(false) to all Strings



  }

  getListOfBrands() {
    let FnBCategoriesFastFood =
      FnB_FAST_FOOD['classifications']['F_&_B']['category']['fast_food'];
    let FnBCategoriesBubbleTea =
      FnB_BUBBLE_COFFEE_YOGHURT_ICE['classifications']['F_&_B']['category']['bubble_tea'];
    let FnBCategoriesCoffee =
      FnB_BUBBLE_COFFEE_YOGHURT_ICE['classifications']['F_&_B']['category']['coffee'];
    let FnBCategoriesYoghurt =
      FnB_BUBBLE_COFFEE_YOGHURT_ICE['classifications']['F_&_B']['category']['yoghurt'];
    let FnBCategoriesIceCream =
      FnB_BUBBLE_COFFEE_YOGHURT_ICE['classifications']['F_&_B']['category']['ice_cream'];

    console.log(Object.keys(FnBCategoriesFastFood));
    console.log(Object.keys(FnBCategoriesBubbleTea));
    console.log(Object.keys(FnBCategoriesCoffee));
    console.log(Object.keys(FnBCategoriesYoghurt));
    console.log(Object.keys(FnBCategoriesIceCream));

  }

  normalizeTrainingData() {

  }

  /**
   * Generates promos from retrieved FB posts and sends to AirTable
   *
   * @param {[Array]} posts Array of FB posts
   * @return {[Array]} Promos fit for FB chatbot
   */
  generatePromo(posts) {
    console.log(JSON.stringify(posts));
    return [{}, {}, {}];
  }

}
