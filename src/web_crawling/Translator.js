const AirTable = require('airtable');
const Chrono = require('chrono-node');
const Util = require('../lib/util.js');

/**
 * This translator takes ParseHub results and parses, interprets
 * and translates them into AirTable-ready formats.
 *
 * After translation is done, the resulting JSON objects are
 * pushed to AirTable to be displayed.
 */
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

    this.sendToAirTable(taxi_promos, "Taxi");
    this.sendToAirTable(dining_takeaways.concat(groceries), "F&B");
    this.sendToAirTable(fashion_apparel.concat(electronics).concat(health_beauty), "Shopping");
    this.sendToAirTable(hotel.concat(airfare).concat(entertainment), "Travel");
  }

  sendToAirTable(promos, table) {
    let allAirTablePromos = promos;

    this.getUniquePromos(promos, table, (allPromos) => {
      allAirTablePromos = allPromos;

      // allAirTablePromos should not contain duplicates at this point
      for(var i = 0; i < allAirTablePromos.length; i++) {
        let promo = allAirTablePromos[i];

        if (!this.isExpired(promo)) {
          this._base(table).create({
            ID: Util.hashCode(promo.post_title),
            Title: promo.post_title,
            Title_URL: promo.post_title_url,
            Description: promo.post_description,
            Image: promo.img,
            Image_URL: promo.img_url,
            Status: promo.status,
            "Promo Code(s)": JSON.stringify(promo.promo_codes),
            "Start Date & Time": Chrono.parseDate(promo.post_date),
            "End Date & Time": this.parseValidTillDate(promo.valid_till)
          }, (err, record) => {
            if (!err) {
              // No errors
            } else {
              // Return debug message with first 30 chars of post title
              let postTitleSnippet = promo.post_title.slice(0, 30);
              if (postTitleSnippet) {
                console.log("In " + table + " table, " + promo.post_title.slice(0, 30) + "... " + err);
              } else {
                console.log("In " + table + " table, " + promo.post_title + "... " + err);
              }
            }
          });
        }
      }
      console.log("DONE WITH SENDING TO AIRTABLE. PLEASE CHECK AIRTABLE.");
    });
  }

  isExpired(promo) {
    if (promo.status) {
      let status = promo.status;
      return status == "expired" || status == "out of stock"
    } else {
      // If the promo has no status, it doesn't mean it's expired
      return false;
    }
  }

  getUniquePromos(promos, table, callback) {
    let allPromos = promos;
    let postTitles = this.getAllPromoTitles(allPromos);
    let postTitlesID = this.getAllPromoTitleIDs(postTitles);

    this._base(table).select({
      view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function(record) {
        // Skip a promo that's already in AirTable
        allPromos = this.removeDuplicatePromo(allPromos, record.get('ID'));
      }.bind(this));

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }.bind(this), function done(err) {
      if (!err) {
        console.log("All pages fetched! No more records to fetch!");
        callback(allPromos);
      } else {
        console.error(err);
      }
    }.bind(this));
  }

  removeDuplicatePromo(promos, airtablePromoID) {
    return promos.filter(function(promo) {
      let promoIDToCheck = Util.hashCode(promo.post_title);
      return promoIDToCheck !== airtablePromoID;
    });
  }

  getAllPromoTitles(promos) {
    let promoTitles = [];
    promos.forEach((promo) => {
      promoTitles.push(promo.post_title);
    });
    return promoTitles;
  }

  getAllPromoTitleIDs(promoTitles) {
    let promoTitleIDs = [];
    promoTitles.forEach((promoTitle) => {
      promoTitleIDs.push(Util.hashCode(promoTitle));
    });
    return promoTitleIDs;
  }

  /**
   * Parsing Dates using some NLP
   */
  parseValidTillDate(validTillDate) {
    if (validTillDate) {
      return Chrono.parseDate(this.removeDaysLeftInValidTill(validTillDate));
    } else {
      return null;
    }
  }

  removeDaysLeftInValidTill(validTillDate) {
    const daysLeftPatt = "days left";
    let indexOfDaysLeftPatt = validTillDate.search(daysLeftPatt);
    if (indexOfDaysLeftPatt > -1) {
      // Remove the String pattern "days left"
      // E.g. 28 Feb 4 days left --> 28 Feb 4
      let result = validTillDate.slice(0, indexOfDaysLeftPatt - 1);

      // Remove the remainder digits lingering at the back and extraneous whitespaces
      // E.g. 28 Feb 4 --> 4 is sliced out
      // E.g. 28 Feb 24 --> 24 is sliced out (but there is 1 extra whitespace at the back)
      let resultRemovedDaysNumeric = result.slice(0, result.length - 2).trim();
      return resultRemovedDaysNumeric;
    } else {
      return validTillDate;
    }
  }

}
