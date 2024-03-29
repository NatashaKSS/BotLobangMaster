// Import external libraries
const _ = require('underscore');
const PromoDecisionMaker = require('./PromoDecisionMaker.js');
const PromoDecisionMakerPrepper = require('./PromoDecisionMakerPrepper.js');
const FieldsExtractor = require('./FieldsExtractor.js');
const PromoSentenceConstructor = require('./PromoSentenceConstructor.js');
const PromoAirTableHandler = require('./../promo_machine/PromoAirTableHandler.js');

/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class PromoMachine {
  constructor() {
    this._promoDecisionMaker = new PromoDecisionMaker();
    this._promoDecisionMakerPrepper = new PromoDecisionMakerPrepper();
    this._fieldsExtractor = new FieldsExtractor();
    this._promoSentenceConstructor = new PromoSentenceConstructor();
    this._promoAirTableHandler = new PromoAirTableHandler();
  }

  /**
   * Generates promos from retrieved FB posts and sends to AirTable
   *
   * @param {[Array]} posts [<>]
   * @return {[Array]} Promos fit for FB chatbot
   */
  generatePromos(posts) {
    let listOfFBPosts = this._promoDecisionMakerPrepper.flattenListOfFBPosts(posts);
    let listOfPromoObjs = this._promoDecisionMaker.getPromosOnly(false, listOfFBPosts);
    let promos = this.decipherPromoObjs(listOfPromoObjs);
    this._promoAirTableHandler.sendToAirTable("Taxi_FB", promos);
  }

  //==============================================================
  // GENERATE TITLES
  //==============================================================
  decipherPromoObjs(listOfPromoObjs) {
    let decipheredPromos = [];
    for (let i = 0; i < listOfPromoObjs.length; i++) {
      let originalPromoObj = listOfPromoObjs[i];
      let extractedPromoObj = this._fieldsExtractor.getExtracted(originalPromoObj);

      // We only count a promo with a promo code as a valid one
      if (extractedPromoObj["promo_code"]) {
        decipheredPromos.push({
          brand: extractedPromoObj['brand'],
          promoObj: extractedPromoObj,
          title: this._promoSentenceConstructor.generateTaxiPromoTitle(extractedPromoObj),
          description: this._promoSentenceConstructor.generateTaxiPromoDescription(extractedPromoObj),
          image_url: originalPromoObj['full_picture'],
          link_to: originalPromoObj['link'],
        });
      }
    }
    return decipheredPromos;
  }

  //==============================================================
  // PRINT DIAGNOSTICS
  //==============================================================
  printListOfPromoMsg(listOfObjs) {
    for (let i = 0; i < listOfObjs.length; i++) {
      console.log("=================================");
      console.log(listOfObjs[i]['originalMsg']);
      console.log(listOfObjs[i]['brand']);
    }
  }
}
