/**
 * Uber, Grab and Comfort's flagship product names
 * PLEASE MAKE SURE NAMES ARE ALL IN SMALL LETTERS
 */
module.exports = {
  keyword_singular: "taxi",
  keyword_singular_cdg: "taxis",
  terms: {
    UBER: ["uberx", "uberxl", "uberexec", "execlarge", "ubertaxi", "uberpool"],
    GRAB: ["grabcar", "grabtaxi", "grabhitch", "grabshare", "justgrab", "grabfamily"],
    COMFORT: [],
  },
  synonyms: { // Case sensitive to avoid overlapping words
    UBER: {
      uberPOOL: ["POOL"],
    }
  },
  ignore_terms: {
  }
}
