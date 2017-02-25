const AirTable = require('airtable');
const Util = require('./util.js')

module.exports = class Translator {
  constructor() {
    this._airtable = AirTable;
    this._airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: process.env.AIRTABLE_API_KEY
    });
    this._baseID = process.env.AIRTABLE_BASE_ID;
    this._base = this._airtable.base(this._baseID);
  }

  translate(result) {
    console.log("=====================================");
    console.log("Translating all Records...");
    console.log("=====================================");

    // F&B
    let dining_takeaways = result.dining_takeaways_page;
    let groceries = result.groceries_page;

    // Shopping
    let fashion_apparel = result.fashion_apparel_page;
    let electronics = result.electronics_page;
    let health_beauty = result.health_beauty_page;

    // Taxi
    let taxi_promos = result.taxi_promos_page;

    // Travel
    let hotel = result.hotel_page;
    let airfare = result.airfare_page;
    let entertainment = result.entertainment_page;

    this.sendToAirTable(dining_takeaways.concat(groceries), "F&B");
  }

  sendToAirTable(promos, table) {
    for(var i = 0; i < promos.length; i++) {
      let promo = promos[i];

      if (promo.status !== "expired" || promo.status !== "out of stock") {
        this._base(table).create({
          ID: Util.hashCode(promo.post_title),
          Title: promo.post_title,
          Title_URL: promo.post_title_url,
          Image: promo.img,
          Image_URL: promo.img_url,
          Status: promo.status
        }, (err, record) => {
          if (!err) {
            console.log(record.getId());
          } else {
            console.log(err);
          }
        });
      }
    }
  }

  hasDuplicateOnAirTable(post_title_checksum) {

  }

  /**
   * Takes dates in natural sentences and returns a JSON Date object
   */
  parseDate() {

  }

}
