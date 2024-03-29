/**
 * Dictionary for terms that most likely refer to ride types
 */
module.exports = {
  keyword_singular: "ride",
  keyword_singular_cdg: "trip",
  keyword_plural: "rides",
  keyword_plural_cdg: "trips",
  terms: {
    "second_daily_ride": ["2nd", "second"],
    "am": ["AM", "morning", "mornings"],
    "pm": ["PM", "afternoon", "afternoons"],
    "night": ["midnight", "midnights", "night"],
    "weekend": ["weekend", "weekends"],
    "first_two": ["first 2", "first two"],
    "same_day": ["same day"],
    "flat_fare": ["flat-fare"],
  },
  ignore_terms: {
    "year": ["2016", "2017", "2018", "2019", "2020"],
    "redemptions": ["2000", "3000", "5000", "00", "000", "0000"],
  }
}
