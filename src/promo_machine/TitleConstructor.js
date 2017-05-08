let TextManipulator = require('./../lib/TextManipulator.js');

// Import database of taxi flagship products
const TAXI_PRODUCTS = require('./../references/lookup/taxi_product_names.js');

// Import database of
const PROMO_CODE_IGNORE_TERMS = require('./../references/lookup/ignore_terms/title/promo_code_ig_terms.js');
const RIDE_TYPE_IGNORE_TERMS = require('./../references/lookup/ignore_terms/title/ride_types.js');
const RIDE_TYPES = require('./../references/lookup/keywords/title/ride_types.js');
const USER_ACTION_TYPES = require('./../references/lookup/keywords/title/user_actions.js');

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

    titleFields['user_type'] = this.getUserAction(promoText);

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
            !this._TextManipulator.strArrContains(PROMO_CODE_IGNORE_TERMS['promo_code_ig_terms'], token)) {
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
    let tokens = this._TextManipulator.tokenizeToLowerCase(str);
    let resultRideType = null;

    for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];

      // Deal with contextual tokens around keywords like "ride(s)"
      if (token === RIDE_TYPES.keyword_singular || token === RIDE_TYPES.keyword_plural ||
          token === RIDE_TYPES.keyword_singular_cdg || token === RIDE_TYPES.keyword_plural_cdg) {
        let candidateRideTypeTokens = this._TextManipulator.getSurroundingText(tokens, tokens.indexOf(token, i), 5);
        let candidateRideTypePhrase = this._TextManipulator.stitchStringTokens(candidateRideTypeTokens);

        if (!this.getUserAction(candidateRideTypePhrase)) {
          // If this phrase is not a user action, extract modifiers

          for (let j = 0; j < candidateRideTypeTokens.length; j++) {
            let rideTypeToken = candidateRideTypeTokens[j];

            if (this.tokenIsValid(rideTypeToken)) {
              // Modifier extraction for valid tokens
              if (this._TextManipulator.strArrContains(RIDE_TYPES.terms.second_daily_ride, rideTypeToken)) {
                resultRideType = "2nd daily ride";
                break;
              } else if (this._TextManipulator.strContains(str, RIDE_TYPES.terms.first_two[0]) ||
                         this._TextManipulator.strContains(str, RIDE_TYPES.terms.first_two[1])) {
                resultRideType = "first 2 rides";
                break;
              } else if (this._TextManipulator.strArrContains(RIDE_TYPES.terms.night, rideTypeToken)) {
                resultRideType = "midnight rides";
                break;
              } else if (this._TextManipulator.strContainsOnlyDigits(rideTypeToken)) {
                resultRideType = this.getNumericRideType(candidateRideTypeTokens, rideTypeToken);
                break;
              } else if (this._TextManipulator.strArrContains(RIDE_TYPES.terms.am, rideTypeToken)) {
                resultRideType = "AM ride";
                break;
              } else if (this._TextManipulator.strArrContains(RIDE_TYPES.terms.pm, rideTypeToken)) {
                resultRideType = "PM ride";
                break;
              }
            }
          }
        }
      }
    }
    if (resultRideType !== null) {
      return resultRideType;
    } else if (this._TextManipulator.strArrContains(tokens, RIDE_TYPES.keyword_singular) ||
               this._TextManipulator.strArrContains(tokens, RIDE_TYPES.keyword_singular_cdg)) {
      return "ride";
    } else if (this._TextManipulator.strArrContains(tokens, RIDE_TYPES.keyword_plural) ||
               this._TextManipulator.strArrContains(tokens, RIDE_TYPES.keyword_plural_cdg)) {
      // Default if we do find "ride" or "rides" in the sentence but not any other modifier like a digit
      return "rides";
    } else {
      return null;
    }
  }

  getUserAction(str) {
    let userActions = [null, null];

    if (this._TextManipulator.strMatchWordsArr(str, USER_ACTION_TYPES.terms.take_one_ride)) {
      userActions[0] = "Take 1 ride &";
    }

    let payWith = this._TextManipulator.strMatchWordsArr(str, USER_ACTION_TYPES.terms.pay_with);
    let card = this._TextManipulator.strMatchWordsArr(str, USER_ACTION_TYPES.terms.credit_cards);

    if (payWith && card) {
      userActions[1] = payWith + " " + card;
    }

    return userActions;
  }

  //=================================================
  // HELPER FUNCTIONS
  //=================================================
  /**
   * Determines if token is valid or not, usually when that token
   * is in the dictionary of tokens that need to be ignored
   *
   * @param  {[String]} token Word to check
   * @return {[Boolean]}      True if is an invalid token, false otherwise
   */
  tokenIsValid(token) {
    let result =
      !this._TextManipulator.strArrContains(RIDE_TYPE_IGNORE_TERMS.year, token) &&
      !this._TextManipulator.strArrContains(RIDE_TYPE_IGNORE_TERMS.redemptions, token);
    return result;
  }

  /**
   * Obtains the number attached to a "ride" or "rides" keyword
   * before the keyword and ignores the one after. This is based
   * on the assumption that a number occurring after the keyword
   * is usually unrelated to the keyword itself, e.g. Dates.
   *
   * @param  {[Array]} contextTokens    List of contextual phrasal tokens
   * @param  {[String]} digitToken   Token of reference in the contextual phrase
   * @return {[String]}                 Appropriate ride type token based on whether the
   *                                    number is related/unrelated to the keyword
   */
  getNumericRideType(contextTokens, digitToken) {
    let posOfKeyword = this.getPosOfKeyWord(contextTokens);
    let posOfRideTypeToken = contextTokens.indexOf(digitToken);
    let rideTypeTokenIsPresent = posOfRideTypeToken > -1;

    // console.log("pos of ride type token", digitToken, posOfRideTypeToken);

    if (posOfRideTypeToken < posOfKeyword  && rideTypeTokenIsPresent) {
      // If a digit occurs before the word "ride", most likely correct
      let numRides = parseInt(digitToken);
      if (numRides <= 1) {
        return digitToken + " ride";
      } else {
        return digitToken + " rides";
      }
    } else {
      return "rides";
    }
  }

  /**
   * Gets the position of the keyword within a list of contextual
   * tokens
   *
   * @param  {[Array]} contextTokens List of contextual phrasal tokens
   * @return {[Int]}                 Position of keyword, if found.
   *                                 Returns -1 if not found in list.
   */
  getPosOfKeyWord(contextTokens) {
    let posOfKeyword = -1;
    let keyword1 = RIDE_TYPES.keyword_singular;
    let keyword2 = RIDE_TYPES.keyword_plural;

    if (this._TextManipulator.strArrContains(contextTokens, keyword1)) {
      posOfKeyword = contextTokens.indexOf(keyword1);
    } else if (this._TextManipulator.strArrContains(contextTokens, keyword2)) {
      posOfKeyword = contextTokens.indexOf(keyword2);
    }
    return posOfKeyword;
  }

}
