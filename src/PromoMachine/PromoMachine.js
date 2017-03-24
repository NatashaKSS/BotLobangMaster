/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class PromoMachine {
  constructor() {
    const Normalizer = new require('../NLP/Normalizer.js');
    let normalizer = new Normalizer();
    normalizer.attachStemmer(); // applies stemmer to all Strings

    console.log("awesome! man i am. i didn't do it sia!!".tokenizeAndStem(false));
  }

  /**
   * Uses TreebankWordTokenizer to tokenize a String with RegExp.
   *
   * @param {[Array]} posts Array of FB posts
   * @return {[Array]} Promos fit for FB chatbot
   */
  generatePromo(posts) {
    console.log(JSON.stringify(posts));
    return [{}, {}, {}];
  }

}
