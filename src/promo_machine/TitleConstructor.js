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
    this._maxChars = 80;

    // For my own reference
    this._titleFields = {
      brand: "", // E.g. Uber, Grab, Comfort
      product: "", // E.g. UberPOOL, GrabSHARE
      amount: "", // E.g. X% OFF, $X OFF
      ride_opt: "", // E.g. "Weekend Riders", "Rides to and from CBD", "2nd daily ride"
      ride_freq: "", // E.g. "2 rides", "unlimited rides"
      promo_code: "", // E.g. "7POOL", "WKNDRIDER"
      user_action: "", // E.g. "Take 1 ride & get"
      user_type: "", // E.g. "1st-Time Users", "2 free rides for 1st-time users with code 1STTIME"
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
      brand: "",
      product: "",
      'amount_$': [],
      'amount_%': [],
      ride_opt: "",
      ride_freq: "",
      promo_code: "",
      user_action: "",
      user_type: ""
    }

    titleFields['brand'] = "";
    titleFields['product'] = this.getProduct(promoText);

    titleFields['amount_$'] = this.getPrice(promoText);
    titleFields['amount_%'] = this.getPercentage(promoText);

    titleFields['ride_opt'] = "";
    titleFields['ride_freq'] = "";

    titleFields['promo_code'] = this.getPromoCodes(promoText);

    titleFields['user_action'] = "";
    titleFields['user_type'] = "";

    return titleFields;
  }

  //==============================================================
  // FIELD by FIELD EXTRACTION
  //==============================================================
  /**
   * Searchs through str to find a list of flagship product names, e.g. uberPOOL, GrabSHARE
   *
   * @param {String} str String to extract field from
   * @return {Array} Flagship product names (non-normalized) OR null if not found
   */
  getProduct(str) {
    let productNames = TAXI_PRODUCTS['taxi_product_names']['ALL'];
    let tokens = this.tokenize(str);

    let extractedProductNames = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      for (let j = 0; j < productNames.length; j++) {
        token = this.getOnlyUnicodeChars(tokens[i]);
        if (token.toLowerCase() === productNames[j].toLowerCase()) {
          if (!this.strArrContains(extractedProductNames, token)) {
            // Duplicates will not be tolerated in our extracted list
            extractedProductNames.push(token); // Get original word (no lower case)
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

  getPrice(str) {
    // Get dollar sign
    // Get digits 3, 3.0, 3.33, but not more than 2 digits after decimal (e.g. 3.33333) and any number of spaces after
    // Get off OR discount words and any number of spaces after
    return str.match(/(\$[0-9]+(\.[0-9]{2})?\s+(off|Off|OFF|discount|DISCOUNT|Discount))/g);
  }

  getPercentage(str) {
    // Get digits 3, 3.0, 3.33, and any number of spaces after
    // Get dollar sign
    // Get off, discount words and any number of spaces after
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
    let tokens = this.tokenize(str);

    let extractedPromoCodes = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      token = this.getOnlyUnicodeChars(tokens[i]);
      if (token === token.toUpperCase()) {
        if (!this.strArrContains(extractedPromoCodes, token) &&
            !this.strContainsPunctuation(token) &&
            !this.strContainsTime(token) &&
            !this.strContainsNumberRange(token) &&
            this.containsAtLeast4Digits(token) &&
            !this.strArrContains(IGNORE_TERMS['promo_code_ig_terms'], token)) {
          // Duplicates will not be tolerated in our extracted list
          // Tokens with punctuation will not be counted
          if (token.length > 0) {
            extractedPromoCodes.push(token); // Get original word (no lower case)
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

  //==============================================================
  // REEEALLYYY SMALL STRING MANIPULATION FUNCTIONS
  //==============================================================
  strContains(str, regex) {
    return str.match(regex) ? true : false;
  }

  strArrContains(arrayOfStrings, searchString) {
    return arrayOfStrings.indexOf(searchString) > -1;
  }

  strContainsPunctuation(str) {
    return this.strContains(str, /[,!@#$%^&|*\-(){}.\\]/g);
  }

  strContainsTime(str) {
    return this.strContains(str, /(([0-9:]+|[0-9]+)(am|AM|pm|PM))/g);
  }

  strContainsOnlyDigits(str) {
    return this.strContains(str, /^\d+$/gm);
  }

  /**
   * Check if a string contains ONLY digits and has at least 4 digits
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  containsAtLeast4Digits(str) {
    if (this.strContainsOnlyDigits(str)) {
      return this.strContains(str, /[0-9]{4,}/g);
    } else {
      // If this doesn't contain digits, e.g. all letters or mix of digits and
      // letters then it is still valid in this condition
      return true;
    }
  }

  strContainsNumberRange(str) {
    return this.strContains(str, /([0-9]+[-][0-9]+)/g);
  }

  //=================================================
  // STRING SANITATION FUNCTIONS
  //=================================================
  tokenize(str) {
    return str.split(/[ .,!?]/g);
  }

  /**
   * Filters non-unicode characters away
   *
   * @param  {[type]} str String to clean up
   * @return {[type]}     String that's cleaned up with only UTF-8 unicode chars
   */
  getOnlyUnicodeChars(str) {
    var result = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode <= 127) {
        result += str.charAt(i);
      } else if (charCode === 8211) { // Weird non-UTF hyphen
        result += '-';
      }
    }
    return result;
  }
}
