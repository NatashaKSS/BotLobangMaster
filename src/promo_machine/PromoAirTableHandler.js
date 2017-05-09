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

  sendToAirTable(table, promos) {
    let allAirTablePromos = promos;

    this.getUniquePromos(promos, table, (uniquePromos) => {
      allAirTablePromos = uniquePromos;

      // allAirTablePromos should not contain duplicates at this point
      for(var i = 0; i < allAirTablePromos.length; i++) {
        let promo = allAirTablePromos[i].promoObj;
        let title = allAirTablePromos[i].title;
        let description = allAirTablePromos[i].description;

        this._base(table).create({
          promo_code_ID: promo.promo_code[0],
          promo_codes: JSON.stringify(promo.promo_code),
          title: title,
          description: description,
          image: null,
          brand: promos[i].brand,
          product: JSON.stringify(promo.product),
          amount_$: JSON.stringify(promo["amount_$"]),
          "amount_%": JSON.stringify(promo["amount_%"]),
          ride_type: JSON.stringify(promo["ride_type"]),
          redemptions: JSON.stringify(promo["redemptions"]),
          user_type: JSON.stringify(promo["user_type"]),
          "Start Date & Time": this.getValidDate(promo["date"]["start"]),
          "End Date & Time": this.getValidDate(promo["date"]["end"]),
        }, (err, record) => {
          if (!err) {
            // No errors
          } else {
            // Return debug message with first 30 chars of post title
            console.log("ERROR IN", record);
          }
        });
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
        allPromos = this.removeDuplicatePromo(allPromos, record.get('promo_code_ID'));
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

  /**
   * Check for duplicates by using the first promo code extracted from a
   * promo object and cross-check that with promo_code_ID of AirTable
   *
   * @param  {[Array]} promos             List of promo objects
   * @param  {[String]} airTablePromoCode Unique AirTable promo code acting as ID
   * @return {[Array]}                    List of unseen promo objects to be sent to airtable
   */
  removeDuplicatePromo(promos, airTablePromoCode) {
    return promos.filter(function(promoObj) {
      if (promoObj.promoObj.promo_code[0]) {
        return promoObj.promoObj.promo_code[0] !== airTablePromoCode;
      }
    });
  }

  //===========================================
  // HELPER FUNCTIONS
  //===========================================
  /**
   * Obtains the valid date in Asia/Singapore timezone in JS Date objetc format
   *
   * @param  {[Date]} date  JS Date object already in SG timezone
   * @return {[Date]}       Today's current date/time in SG timezone
   */
  getValidDate(date) {
    if (!date) {
      let currDate = new Date();
      currDate.setHours(currDate.getHours() + 8); // Singapore time
      return currDate;
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
