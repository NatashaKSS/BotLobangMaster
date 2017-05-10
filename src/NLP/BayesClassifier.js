/**
 * Bayes Classifier
 * based on npm library Natural's use of the WordNet corpus
 *
 * Classifies text as 'promo' or 'not-promo'
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
   *                          { tokens: ['study', 'hard' ] , label: 'not-promo' }]
   */
  setTraining(postLabelClassifications) {
    for (let i = 0; i < postLabelClassifications.length; i++) {
      this._bayesClassifier.addDocument(
        postLabelClassifications[i].tokens, postLabelClassifications[i].label);
    }
  }

  /**
   * Trains this classifier
   *
   * Precondition:
   * Classifier must already by trained.
   */
  train() {
    this._bayesClassifier.train();
  }

  /**
   * Classifies a piece of text and outputs its label as 'promo' or 'not-promo'.
   *
   * Precondition:
   * Classifier must already be trained.
   *
   * @param {String} text Text to be classified
   * @return {String} Label classification of this text
   */
  classifyAndGetLabel(text) {
    return this._bayesClassifier.classify(text);
  }

  /**
   * Classifies a post's message and labels it as 'promo' or 'not-promo'.
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
   * Classifies a list of post's message and labels each of them as 'promo' or 'not-promo'.
   *
   * Precondition:
   * Classifier must already be trained.
   *
   * @param {String} postMsgs Array of post messages to classify whether they are promos or not
   * @return {Object} List of classifications of each postMsg.
   *                  E.g. [{label: '<postMsg1>', value: 'promo'},
   *                        {label: '<postMsg2>', value: 'not-promo'}]
   */
  classifyListOfPostMsgs(postMsgs) {
    let classifications = [];
    for (let i = 0; i < postMsgs.length; i++) {
      classifications.push(this.classifyPostMsg(postMsgs[i]));
    }
    return classifications;
  }

}
