const request = require('request');
const FBGraph = require('fbgraph');

/**
 * This class defines a handler for all security and verification requests,
 * tokens and authorization needed by AirTable.
 */
module.exports = class FBPostsRetriever {
  constructor() {
    this._FBGraph = require('fbgraph');
    this._FBGraph.setAccessToken(process.env.FB_ACCESS_TOKEN_BOT_TEST_A1);

  }

  /**
   * Sends an authorised GET request to FB Graph API
   *
   * @param {[options]} options JSON object representing query options
   * @param {[options]} queryURL queryURL representing FB page URL
   * @param {[options]} queryParams Query params appended to back of URL for
   *                                additional options
   * @returns {object} FB post JSON object
   */
  getNode(options, queryURL, queryParams, callback) {
    var that = this;
    var result = 0;

    this._FBGraph.setOptions(options).
      get("PizzaHutSingapore" + queryParams, function(err, res) {
        if (err) {
          console.log("ERROR: ", err);
          result = 0;
        } else if (!res) {
          console.log("NO RESPONSE RECEIVED");
          result = 0;
        } else {
          result = res.data[0];
        }
        callback(result);
      });
  }

  printPostFieldsToConsole(post) {
    if (post) {
      console.log("=========POST ID " + post.id + "=========");
      console.log("MESSAGE: ", post.message);
      console.log("FULL_PICTURE URL: ", post.full_picture);
      console.log("LINK: ", post.link);
      const attachments = post.attachments;
      console.log("ATTACHMENTS_URL: ", attachments.data[0].url); // Same as LINK field
      console.log("===================");
    } else {
      console.log("Post is undefined");
    }
  }
}
