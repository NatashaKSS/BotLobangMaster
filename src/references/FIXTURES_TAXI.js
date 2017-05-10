/**
 * FIXTURES FOR TAXI PROMOS
 *
 * Glossary:
 * TYPES : "F_&_B", "ONLINE_SHOPPING"...
 * CATEGORIES: "fast_food", "all_in_one", "coffee"...
 * 							(non-plural, lowercase, underscore-separated)
 * TEXT : Messgae of the FB post
 * LABEL: Whether it is 'promo' or 'not-promo'
 */

// =============================================== FIXTURES
// TAXI FIXTURES TAXT (uber, grab, comfort)
// ===============================================

module.exports = {
  classifications: {
    "taxi": {
      "category": {
        "taxi": {
          "uber": [
            {
              "text": "Your weekly #UberPopQuiz is back! Answer the question in the" +
                  " comments and stand a chance to win $50 in Uber credits if y" +
                  "ou have the right answer. Not sure? Give it a shot and encou" +
                  "rage your friends to do the same. We’ll announce the answer " +
                  "tomorrow, so stay tuned! ",
              "label": "not-promo"
            }, {
              "text": "Your Monday just got a little better! Apply code 4LESS to ge" +
                  "t $4 off up to 3 uberPOOL rides till Friday, 11:59PM and tra" +
                  "vel to your weekday appointments without worrying about the " +
                  "cost. Limited redemptions available. #UberEverywhere ",
              "label": "promo"
            }, {
              "text": "Travelling on a shoestring? Or indulging in a luxurious geta" +
                  "way? We’ve got ride options that that suit your travelling s" +
                  "tyle! Whether it’s uberPOOL, uberX, uberXL or more - all you" +
                  " need to do is choose. #UberEverywhere ",
              "label": "not-promo"
            }
          ],
          "grab": [
            {
              "text": "We heard you and we’re bringing this promotion back! Just ta" +
                  "ke 1 GrabCar ride each day, and you’ll get $8 off your secon" +
                  "d GrabCar ride of the day, every day. All you need to do is " +
                  "pay via GrabPay (debit/credit card) and apply the promo code" +
                  " 8CAR.  Promotion is valid from 25 March to 28 March. Max 1 " +
                  "redemption per user per day. Hurry, limited to 15,000 redemp" +
                  "tions daily!",
              "label": "promo"
            }, {
              "text": "Faster, secure and with cost savings to boot. Find out how o" +
                  "ur in-app messaging feature GrabChat has changed the way we " +
                  "communicate when we ride. grb.to/chatting ",
              "label": "not-promo"
            }, {
              "text": "Happy FriYAY! GrabTaxi's 10am - 10pm promo will continue til" +
                  "l 28 March! Just use GrabPay (credit/debit card) to pay for " +
                  "your standard taxi rides and receive $7 OFF your fare! Enter" +
                  " promo code ' 1010 '. Promo ends at 10pm, 28 March 2017. Val" +
                  "id for standard taxi rides only. Limited redemptions daily. " +
                  "Other terms and conditions apply: grb.to/1010fb",
              "label": "promo"
            }
          ],
          "cdg": [
            {
              "text": "Lights out in support of #EarthHour! Have you done your part" +
                  "? Share with us if you have done so! #ChangeClimateChange ",
              "label": "not-promo"
            }, {
              "text": "Lazada turns 3! To mark the occasion, we are offering the pr" +
                  "omo code LAZBDAYRIDE that takes $3.30 off the taxi fare when" +
                  " you book via the ComfortDelGro App from 21-23 March! Limite" +
                  "d to one redemption per mobile number, and valid for the fir" +
                  "st 2000 redemptions for the campaign. What's more, shop onli" +
                  "ne with Lazada and get 18% off your purchase (capped at $8) " +
                  "for new users with promo code CDGLAZBYAY, and 15% off (cappe" +
                  "d at $5) for existing users with promo code CDGLAZBDAY. Chec" +
                  "k out these great deals at http://www.lazada.sg/cdgbday17! T" +
                  "&Cs apply, visit http://www.lazada.sg/promo-details for more" +
                  " information.",
              "label": "promo"
            }, {
              "text": "It's the weekend! 💎 Hang out and party hard. Use 2NITE prom" +
                  "o code and enjoy $8 off the taxi fare for trips made between" +
                  " 11pm and 5am from 24-26 February. For the first 6000 redemp" +
                  "tions. Limited to 1 redemption per mobile number per day. T&" +
                  "Cs apply, visit bit.ly/CDGTaxisPromoCodeTCs for more informa" +
                  "tion. ",
              "label": "promo"
            }
          ]
        }
      }
    }
  }
}
