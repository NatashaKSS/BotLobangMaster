const ParseHub = require('./web_crawling/ParseHub.js');
const Translator = require('./web_crawling/Translator.js');

/**
 * This class defines the Web Crawler that parses and translates
 * website DOM nodes to extract usable data.
 */
module.exports = function WebCrawler(app) {
  constructor() {
    // Set up ParseHub
    this._parsehub = new ParseHub();

    // Set up the Translator
    this._translator = new Translator();
  }
}
