/**
 * This class handles the normalization of text:
 *     - Stemming
 *     - Stop Word Removal
 *     - Tokenization
 * based on npm library Natural's use of the WordNet corpus
 */
module.exports = class Normalizer {
  /**
   * Default setup of Natural's Tokenizer and Stemmer.
   *
   * You can even add or remove stop words used by
   */
  constructor() {
    this._Natural = require('natural');
    this._tokenizer = new this._Natural.TreebankWordTokenizer();
    this._stemmer = this._Natural.PorterStemmer;
  }

  /**
   * Applies the current stemmer to all Strings
   *
   * E.g. You can simply do 'I am a godzilla'.tokenizeAndStem(), instead of
   *      having to call the stemmer every single time
   */
  attachStemmer() {
    this._stemmer.attach();
  }

  //==========================================================
  // OTHER FUNCTIONS
  //==========================================================
  /**
   * Uses TreebankWordTokenizer to tokenize a String with RegExp.
   *
   * @param {String} str String of text to tokenize
   * @return {[Array]} Tokens of str
   */
  tokenize(str) {
    let tokens = this._tokenizer.tokenize(str);
    console.log(tokens);
    return tokens;
  }

  /**
   * Uses Porter's Stemmer to stem and tokenize a list of post messages
   * with stop words removal.
   *
   * @param {[Array]} postMsgs Array of post messages to tokenize and stem
   * @return {[Array]} Array of tokenized and stemmed (stop words removed) postMsgs
   */
  stemPostMsgs(postMsgs) {
    let results = [];
    for (postMsg in postMsgs) {
      results.push(postMsg.tokenizeAndStem());
    }
    return results;
  }

}
