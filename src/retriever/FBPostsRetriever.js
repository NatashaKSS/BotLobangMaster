const FBGraph = require('fbgraph');

/**
 * This class defines the FB posts downloader that retrieves all FB posts from
 * a specified FB page.
 */
module.exports = class FBPostsRetriever {
  constructor() {
    this._FBGraph = require('fbgraph');
    this._FBGraph.setAccessToken(process.env.FB_ACCESS_TOKEN_BOT_TEST_A1);
  }

  /**
   * Sets a '<brand name>' field for every FB post in a list of FB posts.
   *
   * @param {[Object]} arrOfFBposts List of FB post objects
   * @param {String} brandName    'Uber', 'Grab' or 'Comfort' brand
   */
  setBrandForEveryPost(arrOfFBposts, brandName) {
    arrOfFBposts.map(function(FBpost) {
      FBpost.brand = brandName;
    });
    return arrOfFBposts;
  }

  /**
   * Sends an authorised GET request to FB Graph API and retrieves a list of
   * FB Post objects. Each FB Post object will have an attached brand based on
   * the queryURL passed in.
   *
   * @param {options} options JSON object representing query options
   * @param {String} queryURL queryURL representing FB page URL
   * @param {String} queryParams Query params appended to back of URL for additional options
   * @returns {Promise} Promise to retrieve FB posts where each post has an attached brand
   */
  getNode(options, queryURL, queryParams) {
    return new Promise((resolve, reject) => {
      this._FBGraph.setOptions(options).get(queryURL + queryParams, (err, res) => {
        try {
          let result = res.data;
          // console.log("POSTS from " + queryURL + " retrieved!!");

          switch(queryURL) {
            case "UberSingapore":
              result = this.setBrandForEveryPost(result, "Uber");
              break;
            case "Grab":
              result = this.setBrandForEveryPost(result, "Grab");
              break;
            case "ComfortDelGroTaxi":
              result = this.setBrandForEveryPost(result, "Comfort");
              break;
            default:
              result = this.setBrandForEveryPost(result, "NO_BRAND");
              break;
          }
          resolve(result.slice(0, 3));
        } catch (error) {
          console.error(error);
          reject(error);
        }
      }); // FBGraph
    }); // Promise
  }

  /**
   * Retrieves list of posts from every specified brand and returns their
   * Promise fulfillments in a list of Promises once the download is done.
   *
   * @param {Object} options JSON object representing query options
   * @param {[String]} queryURLs queryURL representing FB page URL
   * @param {String} queryParams Query params appended to back of URL for additional options
   * @returns {[Promise]} List of Promise fulfillments which are meant to retrieve each brand's FB post
   */
  getListOfNodes(options, queryURLs, queryParams) {
    return Promise.all(
      queryURLs.map((queryURL) => {
        return this.getNode(options, queryURL, queryParams);
      })
    );
  }

  /**
   * Prints diagnostic info about a FB post. Useful for seeing that fields are
   * pulled from FB Graph API about a single FB post.
   *
   * @param  {[Object]} post FB post object
   */
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
