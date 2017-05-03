
module.exports = class TextManipulator {
  constructor() {

  }

  //=================================================
  // GENERAL FUNCTIONS
  //=================================================
  tokenize(str) {
    return str.split(/[ .,!?]/g);
  }

  //=================================================
  // REGEX MATCH STRING FUNCTIONS
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
   * Checks if an array of strings contains a specified string
   *
   * @param  {[Array]} arrayOfStrings Array of strings to check if contains
   *                                  a specified string
   * @param  {[String]} searchString  Input string to check
   * @return {[Boolean]}              True if str has Regex, false otherwise
   */
  strArrContains(arrayOfStrings, searchString) {
    return arrayOfStrings.indexOf(searchString) > -1;
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
   * Check if a string contains ONLY digits and has at least 4 digits
   *
   * @param  {[String]} str   Input string to check
   * @return {[Boolean]}      True if str has digits only and has at least 4,
   *                          false otherwise
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

}
