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
    let tokens = str.split(" ");

    let extractedProductNames = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      for (let j = 0; j < productNames.length; j++) {
        token = tokens[i];
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

  /*
  Promo codes (All CAPS)
  Using RegEx matching

  Problems like:
  11:59PM gets cut to "PM"
  #TGIF gets cut to "TGIF" or #TBT: gets cut to #TBT
  4LESS or 7RIDES gets cut to "LESS" or "RIDES"
  LESS4 or RIDES7 gets cut to "LESS" or "RIDES"

  FREE! or FREE gets cut to "FREE"

  Match numbers and all CAPS: [0-9A-Z]{2,}
   */
  getPromoCodes(str) {
    let tokens = str.split(" ");

    let extractedPromoCodes = [];

    let token = null;
    for (let i = 0; i < tokens.length; i++) {
      token = tokens[i];
      if (token === token.toUpperCase()) {
        if (!this.strArrContains(extractedPromoCodes, token) &&
            !this.strContainsPunctuation(token) &&
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
  strArrContains(arrayOfStrings, searchString) {
    return arrayOfStrings.indexOf(searchString) > -1;
  }

  strContainsPunctuation(str) {
    let matchResult = str.match(/[,!@#$%^&|*(){}.\\]/g);
    if (matchResult) {
      return matchResult.length >= 1;
    } else {
      return null;
    }
  }

}
