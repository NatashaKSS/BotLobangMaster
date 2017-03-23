const ParseHub = require('./ParseHub.js');
const Translator = require('./Translator.js');

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
