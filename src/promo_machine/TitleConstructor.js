/**
 * Extracts title information from a promo's text field and
 * Puts it in a format fit for for pushing to the chatbot
 */
module.exports = class TitleConstructor {
  constructor() {
    this._maxChars = 80;
    this._titleFields = {
      brand: "", // E.g. Uber, Grab, Comfort
      product: "", // E.g. UberPOOL, GrabSHARE
      amount: "", // E.g. X% OFF, $X OFF
      ride_opt: "", // E.g. "Weekend Riders", "Rides to and from CBD", "2nd daily ride"
      ride_freq: "", // E.g. "2 rides", "unlimited rides"
      promo: "", // E.g. "7POOL", "WKNDRIDER"
      user_action: "", // E.g. "Take 1 ride & get"
      user_type: "", // E.g. "1st-Time Users", "2 free rides for 1st-time users with code 1STTIME"
    }
  }

  /**
   * Best-effort extracts elements of a piece of text that most fits the
   * 'title' category and returns
   *
   * @param {String} promoText Message text of the promo
   * @return {String} Title of this promo
   */
  getTitle(promoText) {

  }

  //==============================================================
  // FIELD MANIPULATION
  //==============================================================


}
