/**
 * Contains database of all brands in their respective categories and types.
 *
 * Glossary:
 * TYPES : "F_&_B", "ONLINE_SHOPPING"...
 * CATEGORIES: "fast_food", "all_in_one", "coffee"...
 * 							(non-plural, lowercase, underscore-separated)
 *
 * This also acts as the edge of FB Graph API representing a brand and its
 * FB page. So querying something like
 * "https://graph.facebook.com/v2.8/StarbucksSingapore/posts" will return you
 * a list of JSON objects representing a post on FB's Graph API.
 */
module.exports = {
	brands: {
		"F_&_B": {
			"category": {
				"restaurants" : {
					"manhattan_fish_market" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"co_co_ichibanya" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"brotzeit" : {
						"page_name" : "brotzeit.co",
						"default_img_url" : "/",
					},
				},
				"fast_food" : {
					"macdonalds" : {
						"page_name" : "mcdsg",
						"default_img_url" : "/",
					},
					"kfc" : {
						"page_name" : "KFC.SG",
						"default_img_url" : "/",
					},
					"burger_king" : {
						"page_name" : "BurgerKingSG",
						"default_img_url" : "/",
					},
					"pizza_hut" : {
						"page_name" : "PizzaHutSingapore",
						"default_img_url" : "/",
					},
					"dominos" : {
						"page_name" : "DominosSG",
						"default_img_url" : "/",
					},
					"pezzo" : {
						"page_name" : "PezzoPizzaSG",
						"default_img_url" : "/",
					},
					"4_fingers" : {
						"page_name" : "4FingersSG",
						"default_img_url" : "/",
					},
				},
				"salad" : {
					"saladstop" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"simply_wrapps" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
				},
				"bubble_tea" : {
					"koi" : {
						"page_name" : "koithesg",
						"default_img_url" : "/",
					},
					"gong_cha" : {
						"page_name" : "gongchasg",
						"default_img_url" : "/",
					},
					"share_tea" : {
						"page_name" : "ShareteaSG",
						"default_img_url" : "/",
					},
				},
				"coffee" : {
					"starbucks" : {
						"page_name" : "StarbucksSingapore",
						"default_img_url" : "/",
					},
					"coffee_bean_and_tea_leaf" : {
						"page_name" : "coffeebean.sg",
						"default_img_url" : "/",
					},
					"costa_coffee" : {
						"page_name" : "CostaCoffeeSingapore",
						"default_img_url" : "/",
					},
					"ya_kun" : {
						"page_name" : "yakunkayatoastsg",
						"default_img_url" : "/",
					},
					"toast_box" : {
						"page_name" : "toastboxsingapore",
						"default_img_url" : "/",
					},
				},
				"yoghurt" : {
					"llao_llao" : {
						"page_name" : "llaollaoSingapore",
						"default_img_url" : "/",
					},
				},
				"ice_cream" : {
					"baskin_robbins" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"ben_and_jerrys" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"cold_stone" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
				}
			}
		},
		"ONLINE_SHOPPING": {
			"category": {
				"all_in_one" : {
					"groupon" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"qoo10" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"shopee" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
				},
				"groceries" : {
					"redmart" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"honestbee" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
					"ntuc_online" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
				},
				"fashion_and_apparel" : {
					"lazada" : {
						"page_name" : "",
						"default_img_url" : "/",
					},
				},
			}
		}
	}
}
