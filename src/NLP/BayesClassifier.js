/**
 * Bayes Classifier
 * based on npm library Natural's use of the WordNet corpus
 */
module.exports = class BayesClassifier {
  constructor() {
    this._Natural = require('natural');
    this._bayesClassifier = new this._Natural.BayesClassifier();
  }

  /**
   * Trains the classifier
   *
   * @param {[Array]} postLabelClassifications
   *                    Array of {tokens : label} classifications.
   *                    The post must already be normalized.
   *                    E.g. [{ tokens: ['cool', 'promo'] , label: 'promo' },
   *                          { tokens: ['study', 'hard' ] , label: 'notPromo' }]
   */
  setTraining(postLabelClassifications) {
    for (classification in postLabelClassifications) {
      this._bayesClassifier.addDocument(classification.tokens, classification.label);
    }
  }

  /**
   * Classifies a post's message and labels it as 'promo' or 'notPromo'.
   *
   * Precondition:
   * Classifier must already be trained.
   *
   * @param {String} postMsg String of post's text to classify whether is promo or not
   * @return {Object} Classification of each postMsg.
   *                  E.g. {label: '<postMsg>', value: 'promo'}
   */
  classifyPostMsg(postMsg) {
    return this._bayesClassifier.getClassifications(postMsg);
  }

  /**
   * Classifies a list of post's message and labels each of them as 'promo' or 'notPromo'.
   *
   * Precondition:
   * Classifier must already be trained.
   *
   * @param {String} postMsgs Array of post messages to classify whether they are promos or not
   * @return {Object} List of classifications of each postMsg.
   *                  E.g. [{label: '<postMsg1>', value: 'promo'},
   *                        {label: '<postMsg2>', value: 'notPromo'}]
   */
  classifyListOfPostMsgs(postMsgs) {
    let classifications = [];
    for (postMsg in postMsgs) {
      classifications.push(this.classifyPostMsg(postMsg));
    }
    return classifications;
  }

}
