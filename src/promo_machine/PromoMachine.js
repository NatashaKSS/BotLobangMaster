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

    this._promos = [];
    /*
    {
      title: "",
      description: "",
      img_url: "",
      link_url: "",
      start_date: "",
      end_date: "",
    }
     */
  }

  /**
   * Generates promos from retrieved FB posts and sends to AirTable
   *
   * @param {[Array]} posts Array of FB posts
   * @return {[Array]} Promos fit for FB chatbot
   */
  generatePromos(posts) {
    // TODO: FORGOT TO PASS IN BRAND NAME
    let listOfPromoObjs = this._promoDecisionMaker.getPromosOnly(false, []);

    // this.printListOfPromoMsg(listOfPromoObjs);
    this.generateTitles(listOfPromoObjs);

    return [{}, {}, {}];
  }

  //==============================================================
  // GENERATE TITLES
  //==============================================================
  generateTitles(listOfPromoObjs) {
    for (let i = 0; i < listOfPromoObjs.length; i++) {
      console.log(this._titleConstructor.getTitle(listOfPromoObjs[i]['originalMsg'])['promo_code']);
    }
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
