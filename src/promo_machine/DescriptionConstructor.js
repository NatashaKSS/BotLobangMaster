/**
 * Extracts description information from a promo's text field and
 * Puts it in a format fit for for pushing to the chatbot
 */
module.exports = class DescriptionConstructor {
  constructor() {
    this._maxChars = 80;
    this._descFields = {

    }
  }

  /**
   * Best-effort extracts elements of a piece of text that most fits the
   * 'description' category and returns
   *
   * @param {String} promoText Message text of the promo
   * @return {String} Description of this promo
   */
  getDescription(promoText) {

  }

}
