/**
 * Contains database of all classifications from the respective categories to
 * train the classifier.
 *
 * Glossary:
 * TYPES : "F_&_B", "ONLINE_SHOPPING"...
 * CATEGORIES: "fast_food", "all_in_one", "coffee"...
 * 							(non-plural, lowercase, underscore-separated)
 * TEXT : Messgae of the FB post
 * LABEL: Whether it is 'promo' or 'not-promo'
 */

// =============================================== TAXI TAXT
// (uber, grab, comfort)
// ===============================================

module.exports = {
  classifications: {
    "taxi": {
      "category": {
        "taxi": {
          "uber": [
            {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }
          ],
          "grab": [
            {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }
          ],
          "cdg": [
            {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }, {
              "text": "",
              "label": ""
            }
          ]

        }
      }
    }
  }
}
