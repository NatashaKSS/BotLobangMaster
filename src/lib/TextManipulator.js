
module.exports = class TextManipulator {
  constructor() {

  }

  //=================================================
  // GENERAL FUNCTIONS
  //=================================================
  /**
   * Simple tokenizer that splits on whitespaces and the punctuations .,!?
   *
   * @param  {[String]} str Input String to tokenize
   * @return {[Array]}      Array of Strings
   */
  tokenize(str) {
    return str.split(/[ .!?]+/g);
  }

  /**
   * Simple tokenizer that splits on whitespaces and the punctuations .,!?
   * and converts all tokens to lower case
   *
   * @param  {[String]} str Input String to tokenize
   * @return {[Array]}      Array of lowercase Strings
   */
  tokenizeToLowerCase(str) {
    return str.toLowerCase().split(/[ .!?]+/g);
  }

  getSurroundingText(listOfTokens, indexOfReferenceToken, numNeighbours) {
    let surroundingTokens = [];
    let start = this.getStartOfSurroundingText(indexOfReferenceToken, numNeighbours);
    let end = this.getEndOfSurroundingText(indexOfReferenceToken, numNeighbours, listOfTokens.length)
    for (let i = start; i < end + 1; i++) {
      surroundingTokens.push(listOfTokens[i]);
    }
    return surroundingTokens;
  }

  getStartOfSurroundingText(indexOfReferenceToken, numNeighbours) {
    let ref = indexOfReferenceToken - numNeighbours;
    if (ref < 0) {
      ref = 0;
    }
    return ref;
  }

  getEndOfSurroundingText(indexOfReferenceToken, numNeighbours, numTokens) {
    let ref = indexOfReferenceToken + numNeighbours;
    if (ref > numTokens) {
      ref = numTokens - 1;
    }
    return ref;
  }

  //=================================================
  // REGEX CONTAINS STRING FUNCTIONS
  //=================================================
  /**
   * Checks if a string contains a given regex pattern
   *
   * @param  {[String]} str   Input string to check
   * @param  {[Object]} regex Regex pattern to check with
   * @return {[Boolean]}      True if str has Regex, false otherwise
   */
  strContains(str, regex) {
    return str.match(regex) ? true : false;
  }

  /**
   * Checks if a string contains any one of the words in wordsArr
   *
   * @param  {[type]} str      String to extract regex from
   * @param  {[type]} wordsArr List of words to check if exists
   * @return {[type]}          The matched word/phrase, false if none found
   */
  strMatchWordsArr(str, wordsArr) {
    for (let i = 0; i < wordsArr.length; i++) {
      let match = str.match(wordsArr[i]);
      if (match) {
        return match[0]; // the string that was matched by a word in wordsArr
      }
    }
    return false;
  }

  /**
   * Checks if an array of strings contains a specified string
   *
   * @param  {[Array]} strs Array of strings to check if contains
   *                                  a specified string
   * @param  {[String]} searchString  Input string to check
   * @return {[Boolean]}              True if str has Regex, false otherwise
   */
  strArrContains(strs, searchString) {
    return strs.indexOf(searchString) > -1;
  }

  /**
   * Checks if a string contains punctuations
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has punctuations, false otherwise
   */
  strContainsPunctuation(str) {
    return this.strContains(str, /[,!@#$%^&|*\-(){}.\\]/g);
  }

  /**
   * Checks if a string contains AM/PM time format
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has a time format, false otherwise
   */
  strContainsTime(str) {
    return this.strContains(str, /(([0-9:]+|[0-9]+)(am|AM|pm|PM))/g);
  }

  /**
   * Matches a string to a time range format,
   * e.g. 5am-10am, 5am - 10am, 5AM-10AM, 5AM - 10AM, 5.15am-10.00am
   *
   * @param  {[String]} str   Input string to check
   * @return {[Array]}        Array of matched Strings, null if none found
   */
  strMatchTimeRange(str) {
    return str.match(/(\d{0,2}|\d{0,2}.\d{2})(am|AM|pm|PM)(( - )|-)(\d{0,2}|\d{0,2}.\d{2})(am|AM|pm|PM)/g);
  }

  /**
   * Checks if a string contains a number range, e.g. 23-31, 234-88911
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has a number range, false otherwise
   */
  strContainsNumberRange(str) {
    return this.strContains(str, /([0-9]+[-][0-9]+)/g);
  }

  /**
   * Checks if a string contains only digits
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has digits only, false otherwise
   */
  strContainsOnlyDigits(str) {
    return this.strContains(str, /^\d+$/gm);
  }

  /**
   * For strings that contain ONLY digits, check if it has at
   * least 4 digits.
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has digits only and has at least 4,
   *                          false otherwise
   */
  containsAtLeast4Digits(str) {
    if (this.strContainsOnlyDigits(str)) {
      return this.strContains(str, /[0-9]{4,}/g);
    } else {
      // All letters or mix of digits/letters they're still valid
      return true;
    }
  }

  //=================================================
  // STRING SANITATION FUNCTIONS
  //=================================================
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

  /**
   * Concatenates list of tokens to form 1 string
   *
   * @param  {[type]} tokens [description]
   * @return {[type]}        [description]
   */
  stitchStringTokens(tokens) {
    let str = "";
    for (let i = 0; i < tokens.length; i++) {
      str += tokens[i] + " ";
    }
    return str;
  }

}
