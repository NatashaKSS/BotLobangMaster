/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class isPromoDecisionMaker {
  constructor() {
  }

  /**
   * Determines whether the given post is a promo or not
   *
   * @param {[Object]} post Message of a FB post
   * @return {boolean} True or False if this post is a promo or not
   */
  isPromo(post) {
    console.log(JSON.stringify(post));
    return false;
  }

}
