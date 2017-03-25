const _ = require('underscore');
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
   * ASYNC
   * Sends an authorised GET request to FB Graph API
   *
   * @param {options} options JSON object representing query options
   * @param {String} queryURL queryURL representing FB page URL
   * @param {String} queryParams Query params appended to back of URL for
   *                             additional options
   * @param {Func} callback Callback function after this is finished executing
   * @callback {[Array]} List of FB post JSON objects
   */
  getNode(options, queryURL, queryParams, callback) {
    let that = this;
    let result = 0;

    this._FBGraph.setOptions(options).
      get(queryURL + queryParams, function(err, res) {
        if (err) {
          console.log("ERROR: ", err);
          result = 0;
        } else if (!res) {
          console.log("NO RESPONSE RECEIVED.");
          result = 0;
        } else {
          result = res.data;
          console.log("POSTS from " + queryURL + " retrieved!!");
          callback(result);
        }
      });
  }

  /**
   * ASYNC
   * Retrieves list of posts from every specified brand
   *
   * @param {options} options JSON object representing query options
   * @param {Array[String]} queryURLs queryURL representing FB page URL
   * @param {String} queryParams Query params appended to back of URL for
   *                             additional options
   * @param {Func} callback Callback function after this is finished executing
   * @callback {[Object]} Object mapping of queryURL : list of posts from that brand
   */
  getListOfNodes(options, queryURLs, queryParams, callback) {
    let that = this;
    let posts = {};

    // Waits until all queryURL FB posts have been obtained
    let doneRetrievingPost = _.after(queryURLs.length, function(){
      callback(posts);
    });

    _.each(queryURLs, function(queryURL) {
      that.getNode(options, queryURL, queryParams, function(listOfPosts) {
        posts[queryURL] = listOfPosts;
        doneRetrievingPost();
      });
    })
  }

  printPostFieldsToConsole(post) {
    if (post) {
      console.log("=========POST ID " + post.id + "=========");
      console.log("MESSAGE: ", post.message);
      console.log("FULL_PICTURE URL: ", post.full_picture);
      console.log("LINK: ", post.link);
      const attachments = post.attachments;
      if (attachments) {
        console.log("ATTACHMENTS_URL: ", attachments.data[0].url); // Same as LINK field
      }
      console.log("===================");
    } else {
      console.log("Post is undefined");
    }
  }
}
