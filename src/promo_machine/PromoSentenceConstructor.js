// Import external libraries


/**
 * Generates valid promos in specified formats fit for pushing to the chatbot
 */
module.exports = class PromoSentenceConstructor {
  constructor() {
    /*
    {
      user_type: { take_1_ride: null, pay_with: null },
      brand: 'Uber',
      product: [ 'uberPOOL' ],
      date:
        {
         start: '2017-05-15T00:00:00+08:00',
         end: '2017-05-19T23:59:00+08:00'
        },
      amount_$: [ '$4 off' ],
      amount_%: null,
      ride_type: 'rides',
      promo_code: [ '4LESS' ],
        redemptions: { quantifier: 'limited redemptions', userRestriction: null
      }
    }
    */
  }

  //=====================================================
  // TITLE
  //=====================================================
  generateTaxiPromoTitle(promo) {
    let sentence = "";

    if (promo.product) {
      sentence += this.generateProduct(promo) + ": ";
    } else {
      // If no product specific is found, use brand name instead
      if (promo.brand) {
        sentence += promo.brand + ": ";
      }
    }

    if (promo.user_type.take_1_ride) {
      // E.g. "Take 1 ride &"
      sentence += promo.user_type.take_1_ride + " get ";
    }

    sentence += this.generatePriceOrPercentage(promo) + " ";

    if (promo.ride_type) {
      sentence += promo.ride_type + " ";
    }

    if (promo.promo_code) {
      sentence += "with " + this.generatePromo(promo);
    }

    return sentence;
  }

  generateProduct(promo) {
    let sentence = "";
    for (let i = 0; i < promo.product.length; i++) {
      if (i === promo.product.length - 1) { // The last product name
        sentence += promo.product[i];
      } else {
        sentence += promo.product[i] + " & ";
      }
    }
    return sentence;
  }

  generatePriceOrPercentage(promo) {
    let amount = null;
    if (promo["amount_$"]) {
      amount = promo["amount_$"][0];
    } else if (promo["amount_%"]) {
      amount = promo["amount_%"][0];
    } else {
      amount = "";
    }

    return amount.toUpperCase();

    // For multiple price and percentages
    // let sentence = "";
    // for (let i = 0; i < amount.length; i++) {
    //   let extractedAmount = amount[i].toUpperCase();
    //   if (i === amount.length - 1) { // The last amount's name
    //     sentence += extractedAmount;
    //   } else {
    //     sentence += extractedAmount + ", ";
    //   }
    // }
    // return sentence;
  }

  generatePromo(promo) {
    let promoSentence = "";
    let promos = promo.promo_code;
    for (let i = 0; i < promos.length; i++) {
      let promo = "<" + promos[i] + ">";
      promoSentence += promo;
    }
    return promoSentence;
  }

  //=====================================================
  // DESCRIPTION
  //=====================================================
  /*
  {
    user_type: { take_1_ride: null, pay_with: null },
    brand: 'Uber',
    product: [ 'uberPOOL' ],
    date:
      {
       start: '2017-05-15T00:00:00+08:00',
       end: '2017-05-19T23:59:00+08:00'
      },
    amount_$: [ '$4 off' ],
    amount_%: null,
    ride_type: 'rides',
    promo_code: [ '4LESS' ],
    redemptions: { quantifier: 'limited redemptions', userRestriction: null }
  }
  */
  generateTaxiPromoDescription(promo) {
    let sentence = ""

    let redemptions = promo.redemptions;
    if (redemptions) {
      if (redemptions.userRestriction) {
        sentence += redemptions.userRestriction + ". ";
      }

      if (redemptions.quantifier) {
        sentence += redemptions.quantifier + ". ";
      }
    }

    if (promo.user_type.pay_with) {
      let payWithPhrase = promo.user_type.pay_with;
      sentence += payWithPhrase.charAt(0).toUpperCase() +
                  payWithPhrase.slice(1) +
                  ".";
    }

    return sentence;
  }

}
