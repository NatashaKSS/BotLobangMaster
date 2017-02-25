const airtable = require('airtable');

module.exports = class Translator {
  constructor() {

  }

  translate(result) {
    console.log("=====================================");
    console.log("Translating all Records...");
    console.log("=====================================");

    let dining_takeaways = result.dining_takeaways_page;
    let taxi_promos = result.taxi_promos_page;
    let fashion_apparel = result.fashion_apparel_page;
    let groceries = result.groceries_page;
    let electronics = result.electronics_page;
    let health_beauty = result.health_beauty_page;
    let entertainment = result.entertainment_page;
    let hotel = result.hotel_page;
    let airfare = result.airfare_page;



  }

}
