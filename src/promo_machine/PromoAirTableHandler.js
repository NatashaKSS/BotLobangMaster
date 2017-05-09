const AirTable = require('airtable');
const momentTimezone = require('moment-timezone');

module.exports = class PromoAirTableHandler {
  constructor(endpointURL, apiKey) {
    this._airtable = AirTable;
    this._airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: process.env.AIRTABLE_API_KEY
    });
    this._baseID = process.env.AIRTABLE_BASE_ID;
    this._base = this._airtable.base(this._baseID);
  }

  sendToAirTable(table, promos, title, description,) {
    let allAirTablePromos = promos;

    this.getUniquePromos(promos, table, (allPromos) => {
      allAirTablePromos = allPromos;

      // allAirTablePromos should not contain duplicates at this point
      for(var i = 0; i < allAirTablePromos.length; i++) {
        let promo = allAirTablePromos[i];

        if (!this.isExpired(promo)) {
          this._base(table).create({
            promo_code: promo.promo_code,
            title: title,
            description: description,
            image: null,
            brand: promo.brand,
            product: JSON.stringify(promo.product),
            amount_$: JSON.stringify(promo["amount_$"]),
            "amount_%": JSON.stringify(promo["amount_%"]),
            ride_type: JSON.stringify(promo["ride_type"]),
            redemptions: JSON.stringify(promo["redemptions"]),
            user_type: JSON.stringify(promo["user_type"]),
            "Start Date & Time": this.getValidDate(promo["date"]["Start Date & Time"]),
            "End Date & Time": promo["date"]["End Date & Time"],
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

  getUniquePromos(promos, table, callback) {
    let allPromos = promos;

    this._base(table).select({
      view: "Main View"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function(record) {
        // Skip a promo that's already in AirTable
        allPromos = this.removeDuplicatePromo(allPromos, record.get('promo_code'));
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

  removeDuplicatePromo(promos, airTablePromoCode) {
    return promos.filter(function(promo) {
      if (promo.promo_code) {
        return promo.promo_code !== airTablePromoCode;
      }
    });
  }

  //===========================================
  // HELPER FUNCTIONS
  //===========================================
  getValidDate(date) {
    if (!date) {
      return momentTimezone(new Date()).tz("Asia/Singapore").format();
    } else {
      return date;
    }
  }

  isEmptyRecord(record) {
    if (isDefined(record)) {
      if (isDefined(record.fields)) {
        return Object.keys(record.fields).length === 0;
      } else {
        // console.error('[AIRTABLE] record.fields is undefined.');
        return false;
      }
    } else {
      // console.error('[AIRTABLE] record is undefined.');
      return false;
    }
  }

}
