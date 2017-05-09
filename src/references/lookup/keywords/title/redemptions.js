/**
 * Dictionary for terms that most likely refer to redemption limitations
 */
module.exports = {
  keyword_singular: "redemption",
  keyword_plural: "redemption",
  terms: {
    "limited": ["limited", "Limited", "valid", "Valid"],
    "restriction_1_ride": ["1 redemption per", "one redemption per", "1 ride per", "one ride per"],
    "restriction_2_rides": ["2 rides per", "two rides per"]

  },
  ignore_terms: {
    "unlimited": ["unlimited"],
    "years": ["2015", "2016", "2017", "2018", "2019", "2020"],
  }
}
