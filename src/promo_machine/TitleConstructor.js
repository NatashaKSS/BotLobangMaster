let TextManipulator = require('./../lib/TextManipulator.js');

// Import database of taxi flagship products
const TAXI_PRODUCTS = require('./../references/lookup/taxi_product_names.js');

// Import database of
const IGNORE_TERMS = require('./../references/lookup/ignore_terms/title/promo_code_ig_terms.js');

/**
 * Extracts title information from a promo's text field and
 * Puts it in a format fit for for pushing to the chatbot
 */
module.exports = class TitleConstructor {
  constructor() {
    this._TextManipulator = new TextManipulator();

    this._maxChars = 80;

    // For my own reference
    this._titleFields = {
      user_type: "", // E.g. "Take 1 ride [& get]", "1st-Time users", "DBS/POSB/OCBC/GrabPay users"
      brand: "", // E.g. Uber, Grab, Comfort
      product: "", // E.g. UberPOOL, GrabSHARE
      amount: "", // E.g. X% OFF, $X OFF
      ride_type: "", // E.g. "weekend rides", "rides to and from CBD", "2nd daily ride", "2 rides"
      promo_code: "", // E.g. "7POOL", "WKNDRIDER"
    }
  }

  /**
   * Best-effort extracts elements of a piece of text that most fits the
   * 'title' category and returns:
   * {
   *
   * }
   *
   * @param {String} promoText Message text of the promo
   * @param {String} brand Brand who posted the promo
   * @return {String} Title of this promo
   */
  getTitle(promoText, brand) {
    let titleFields = {
      user_type: "",
      brand: "",
      product: "",
      'amount_$': [],
      'amount_%': [],
      ride_type: "",
      promo_code: "",
    }

    titleFields['user_type'] = "";

    titleFields['brand'] = "";
    titleFields['product'] = this.getProduct(promoText);

    titleFields['amount_$'] = this.getPrice(promoText);
    titleFields['amount_%'] = this.getPercentage(promoText);

    titleFields['ride_type'] = this.getRideType(promoText);

    titleFields['promo_code'] = this.getPromoCodes(promoText);

    return titleFields;
  }

  //==============================================================
  // FIELD by FIELD EXTRACTION
  //==============================================================
  /**
   * Searchs through tokens in str to find a list of flagship product
   * names, e.g. uberPOOL, GrabSHARE
   *
   * @param {String} str String to extract field from
   * @return {Array} Flagship product names (non-normalized) OR null if not found
   */
  getProduct(str) {
    let productNames = TAXI_PRODUCTS['taxi_product_names']['ALL'];
    let tokens = this._TextManipulator.tokenize(str);

    let extractedProductNames = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      for (let j = 0; j < productNames.length; j++) {
        token = this._TextManipulator.getOnlyUnicodeChars(tokens[i]);
        if (token.toLowerCase() === productNames[j].toLowerCase()) {
          if (!this._TextManipulator.strArrContains(extractedProductNames, token)) {
            // Duplicates will not be tolerated in our extracted list
            extractedProductNames.push(token); // Save original token (no lowercase)
          }
        }
      }
    }

    // If we didn't find any product names, return null
    if (extractedProductNames.length == 0) {
      return null;
    } else {
      return extractedProductNames;
    }
  }

  /**
   * Get price field:
   *   - Get dollar sign
   *   - Get digits 3, 3.0, 3.33, but not more than 2 digits after decimal
   *     (e.g. 3.33333) and any number of spaces after
   *   - Get off OR discount words and any number of spaces after
   *
   * @param  {[String]} str Input string to extract from
   * @return {[String]}     Price field
   */
  getPrice(str) {
    return str.match(/(\$[0-9]+(\.[0-9]{2})?\s+(off|Off|OFF|discount|DISCOUNT|Discount))/g);
  }

  /**
   * Get percentage field:
   *   - Get digits 3, 3.0, 3.33, and any number of spaces after
   *   - Get dollar sign
   *   - Get off, discount words and any number of spaces after
   *
   * @param  {[String]} str Input string to extract from
   * @return {[String]}     Percentage field
   */
  getPercentage(str) {
    return str.match(/([0-9]+\%\s+(off|Off|OFF|discount|Discount|DISCOUNT))/g);
  }

  /**
   * Searches through str and obtains a list of promo codes since 1 post may
   * contain multiple.
   *
   * @param  {[String]} str String to extract field from
   * @return {[Array]}      List of promo codes or null if none are found
   */
  getPromoCodes(str) {
    let tokens = this._TextManipulator.tokenize(str);

    let extractedPromoCodes = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      token = this._TextManipulator.getOnlyUnicodeChars(tokens[i]);
      if (token === token.toUpperCase()) {
        if (!this._TextManipulator.strArrContains(extractedPromoCodes, token) &&
            !this._TextManipulator.strContainsPunctuation(token) &&
            !this._TextManipulator.strContainsTime(token) &&
            !this._TextManipulator.strContainsNumberRange(token) &&
            this._TextManipulator.containsAtLeast4Digits(token) &&
            !this._TextManipulator.strArrContains(IGNORE_TERMS['promo_code_ig_terms'], token)) {
          // Duplicates will not be tolerated in our extracted list
          if (token.length > 0) {
            extractedPromoCodes.push(token); // Save original token (no lowercase)
          }
        }
      }
    }
    // If we didn't find any promo codes, return null
    if (extractedPromoCodes.length == 0) {
      return null;
    } else {
      return extractedPromoCodes;
    }
  }

  getRideType(str) {

  }

}
