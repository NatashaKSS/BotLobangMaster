const crypto = require('crypto');

/**
 * This class defines a handler for all security and verification requests,
 * tokens and authorization needed by AirTable.
 */
module.exports = function SecurityHandler(app) {
  /**
   * Default constructor of SecurityHandler that sets up references to the
   * app and config key names.
   *
   * @param app    Reference to an instance of BotLobangMaster
   */
  this._app = app;

  // The names of each API key stored in the process env
  this._CONFIG_KEY_NAMES = {
    AIRTABLE_API_KEY: "AIRTABLE_API_KEY",
    AIRTABLE_BASE_ID_KEY: "AIRTABLE_BASE_ID",
    PARSEHUB_PROJECT_TOKEN_KEY: "PARSEHUB_PROJECT_TOKEN",
    PARSEHUB_API_KEY: "PARSEHUB_API_KEY",
    PARSEHUB_LAST_RUN_TOKEN_KEY: "PARSEHUB_LAST_RUN_TOKEN"
  }

  /**
   * A helper function to check if all config keys exist
   */
  this.allConfigsExist = () => {
    for(let key in this._CONFIG_KEY_NAMES) {
      if (this._CONFIG_KEY_NAMES.hasOwnProperty(key)) {
        this.configExists(this._CONFIG_KEY_NAMES[key]);
      }
    }
    return true;
  }

  /**
  * Throws an error if a key is missing from the process env variables.
  *
  * @param configKey    Name of the key that stores the env variable's value.
   */
  this.configExists = (configKey) => {
    if (!process.env[configKey]) {
    	throw new Error('[Security] missing ' + configKey + " config key.");
    }
  }
}
