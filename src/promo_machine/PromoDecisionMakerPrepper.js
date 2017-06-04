
module.exports = class PromoDecisionMakerPrepper {
  constructor() {

  }

  //==================================================
  // SPECIFIC DATA PREPPER FUNCTIONS
  //==================================================
  /**
   * Composes FB post objects to prepare the classification object for the
   * BayesClassifier
   *
   * @param  {[Array]} FBposts Array of FBPosts where each post is in this format:
   * {
       message: 'FREE RIDES! Our elevated GiveGet of perk! Learn more: t.uber.com/givegetsg',
       full_picture: 'https://blabla.com',
       link: 'https://www.facebook.com/UberSingapore/photos/blabla/',
       id: '271012636394581_768276946668145',
       attachments: [Object]
     }
   * @return {[Array]} [{ originalMsg: 'aces b',
   *                      normalizedStr: 'ace b',
   *                      tokens: ['ace', 'b'],... , ...]
   */
  composeFBPostPromos(FBposts) {
    let composedDataObjs = [];

    for (let i = 0; i < FBposts.length; i++) {
      let FBpost = FBposts[i];
      if (FBpost.message) {
        let composedDataObj = {};
        for (let key in FBpost) {
          composedDataObj[key] = FBpost[key];
        }
        let normalizedTokens = FBpost.message.tokenizeAndStem(false);
        composedDataObj.originalMsg = FBpost.message;
        composedDataObj.normalizedStr = this.stitchTokensIntoString({ tokens: normalizedTokens });
        composedDataObj.tokens = normalizedTokens;

        composedDataObjs.push(composedDataObj);
      }
    }
    return composedDataObjs;
  }

  /**
   * Stitches object with field 'tokens' up into a String
   *
   * @param {[Object]} tokenizedData { originalMsg: 'a b', tokens: ['a', 'b'], label: 'not-promo' }
   * @return {[String]} 'a b'
   */
  stitchTokensIntoString(tokenizedData) {
    let accumulatedStr = "";
    let tokens = tokenizedData['tokens'];
    for (let i = 0; i < tokens.length; i++) {
      accumulatedStr += tokens[i] + " ";
    }
    return accumulatedStr;
  }

  //==================================================
  // GENERIC DATA PREPPER FUNCTIONS
  //==================================================
  /**
   * Flattens an arbitrary list of lists, e.g. [[1,2,3], [7,5]]... into
   * [1,2,3,7,5]
   *
   * @param  {[Array]} elements Array of arrays of elements
   * @return {[Array]}          Array of singleton elements
   */
  flattenListOfFBPosts(elements) {
    let result = [];
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements[i].length; j++) {
        result.push(elements[i][j]);
      }
    }
    return result;
  }
}
