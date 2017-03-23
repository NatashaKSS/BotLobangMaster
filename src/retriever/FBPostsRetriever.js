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
   * @param {[options]} queryURL Query URL appended to back of URL for
   *                             additional options
   * @returns null
   */
  getNode(options, queryURL) {
    var that = this;

    this._FBGraph.setOptions(options).
      get("PizzaHutSingapore" + queryURL, function(err, res) {
        if (err || !res) {
          console.log(err);
        }

        that.printPostFieldsToConsole(res.data[0]);
      });
  }

  printPostFieldsToConsole(post) {
    console.log("=========POST ID " + post.id + "=========");
    console.log("MESSAGE: ", post.message);
    console.log("FULL_PICTURE URL: ", post.full_picture);
    console.log("LINK: ", post.link);
    const attachments = post.attachments;
    console.log("ATTACHMENTS_URL: ", attachments.data[0].url); // Same as LINK field
    console.log("===================");
  }
}
