const request = require('request');

/**
* This class retrieves last run jobs, retrieves last run job info,
* initiates or cancels run jobs from ParseHub.
 */
module.exports = class ParseHub {
  constructor() {

  }

  /**
   * Gets the run object for a given run token.
   *
   * You can call this method repeatedly to poll for when a run is done,
   * though we recommend using a webhook instead.
   *
   * This method is rate-limited.
   *
   * For each run, you may make at most 25 calls during the first 5 minutes
   * after the run started, and at most one call every 3 minutes after that.
   *
   * @returns    Run object for a given run token.
   */
  getRunInfo() {
    request({
      uri: 'https://www.parsehub.com/api/v2/runs/' +
            process.env.PARSEHUB_LAST_RUN_TOKEN,
      method: 'GET',
      qs: {
        api_key: process.env.PARSEHUB_API_KEY
      }
    }, function(err, res, body) {
      console.log("=====================================");
      console.log("Get Run Info...");
      console.log("RUN OBJECT: " + JSON.stringify(JSON.parse(body)));
      console.log("=====================================");
    });
  }

  /**
   * This will start running an instance of the project on the ParseHub cloud.
   *
   * It will create a new run object. This method will return immediately,
   * while the run continues in the background. You can use webhooks or polling
   * to figure out when the data for this run is ready in order to retrieve it.
   *
   * @returns    Run object that was created.
   */
  runProject() {
    request({
      method: "POST",
      gzip: true,
      uri: "https://www.parsehub.com/api/v2/projects/" +
            process.env.PARSEHUB_PROJECT_TOKEN + "/run",
      form: {
        api_key: process.env.PARSEHUB_API_KEY
      }
    }, function(err, res, body) {
      console.log("=====================================");
      console.log("Run Project...");
      if(!err) {
        let runObj = JSON.parse(body);
        console.log("RUN OBJECT: " + JSON.stringify(runObj));
        console.log("RUN TOKEN: " + runObj.run_token);
        console.log("=====================================");
      } else {
        console.log(err);
      }
    });
  }

  /**
   * This returns the data for the most recent ready run for a project.
   *
   * @returns    The data in csv/json, depending on the format parameter.
   */
  retrieveLastReadyData(callback) {
    request({
      method: "GET",
      gzip: true,
      uri: "https://www.parsehub.com/api/v2/projects/" +
            process.env.PARSEHUB_PROJECT_TOKEN + "/last_ready_run/data",
      qs: {
        api_key: process.env.PARSEHUB_API_KEY,
        format: "json"
      }
    }, function(err, res, body) {
      console.log("=====================================");
      console.log("Retrieve all Records...");
      console.log("=====================================");
      if (!err) {
        // A very large JSON object returned from ParseHub
        // console.log(JSON.parse(body));
        callback(JSON.parse(body));
      } else {
        console.log(err);
        return err;
      }
    });
  }

  /**
   * This cancels a run and changes its status to cancelled.
   * Any data that was extracted so far will be available.
   *
   * @returns    The run identified by {RUN_TOKEN}.
   */
  cancelRunProject(parsehubLastRunToken) {
    request({
      uri: "https://www.parsehub.com/api/v2/runs/" +
            parsehubLastRunToken + "/cancel",
      method: 'POST',
      form: {
        api_key: "tyA1jbOJwjWT"
      }
    }, function(err, res, body) {
      console.log("=====================================");
      console.log("Cancel Project Run...");
      console.log("RUN OBJECT: " + JSON.stringify(JSON.parse(body)));
      console.log("=====================================");
    });
  }

}
