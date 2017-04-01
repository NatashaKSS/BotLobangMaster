// Import external libraries
const _ = require('underscore');
const PromoDecisionMaker = require('./PromoDecisionMaker.js');
const TitleConstructor = require('./TitleConstructor.js');

/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class PromoMachine {
  constructor() {
    this._promoDecisionMaker = new PromoDecisionMaker();
    this._titleConstructor = new TitleConstructor();
  }

  /**
   * Generates promos from retrieved FB posts and sends to AirTable
   *
   * @param {[Array]} posts Array of FB posts
   * @return {[Array]} Promos fit for FB chatbot
   */
  generatePromos(posts) {
    let promoObjs = this._promoDecisionMaker.getPromosOnly(false, []);

    this.printListOfPromoMsg(promoObjs);

    return [{}, {}, {}];
  }

  //==============================================================
  // PRINT DIAGNOSTICS
  //==============================================================
  printListOfPromoMsg(listOfObjs) {
    for (let i = 0; i < listOfObjs.length; i++) {
      console.log("=================================");
      console.log(listOfObjs[i]['originalMsg']);
    }
  }
}
