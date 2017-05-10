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

 //===============================================
 // TAXI
 // TAXT (uber, grab, comfort)
 //===============================================

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
              "text": "Looks like the weekend just started early! Apply code UNLIMI" +
                  "TED to get $3 off ALL uberX and uberPOOL rides from Friday 1" +
                  "2AM - Sunday 11:59PM! Pay how you like - by cash or card. Li" +
                  "mited redemptions available. #TGIF ",
              "label": "promo"
            }, {
              "text": "#TBT: Looking back at our International Women’s Day celebrat" +
                  "ion with our amazing community of women driver partners. Tha" +
                  "nk you for juggling all that you do, and still finding the t" +
                  "ime to keep Singapore moving! The Uber family is humbled by " +
                  "your passion, strength and stories. #sUBERwomen ",
              "label": "not-promo"
            }, {
              "text": "Your safety is our priority. Now, your driver needs to take " +
                  "a selfie before accepting a ride! Our new Real-Time ID Check" +
                  " will make sure that you are getting the correct driver behi" +
                  "nd the wheel for your ride. ",
              "label": "not-promo"
            }, {
              "text": "Did you know that fares on uberPOOL are up to 40% cheaper th" +
                  "an uberX? And there’s more! Apply code 4LESS to get $4 off u" +
                  "p to 3 uberPOOL rides till Friday, 11:59PM and POOL your way" +
                  " to big savings! Limited redemptions available. ",
              "label": "promo"
            }, {
              "text": "Your Monday just got a little better! Apply code 4LESS to ge" +
                  "t $4 off up to 3 uberPOOL rides till Friday, 11:59PM and tra" +
                  "vel to your weekday appointments without worrying about the " +
                  "cost. Limited redemptions available. #UberEverywhere ",
              "label": "promo"
            }, {
              "text": "Dreading the weekday rush? Travel to work or school comforta" +
                  "bly and affordably all week! Apply code 4LESS to get $4 off " +
                  "3 uberPOOL rides from Monday, 12AM - Friday, 11:59PM. Limite" +
                  "d redemptions available. ",
              "label": "promo"
            }, {
              "text": "#UberPopQuiz answer revealed! Your fare from the airport can" +
                  " be less than $10 if your destination is close by, and if no" +
                  "t, it's $10 to anywhere in the city! Our lucky rider Rennie " +
                  "just won $50 in Uber credits for having the right answer. Co" +
                  "ngratulations! Want to be next? Stay tuned for our next #Ube" +
                  "rPopQuiz!",
              "label": "not-promo"
            }, {
              "text": "Calling all Manchester United fans— you can watch exclusive " +
                  "behind-the-scenes interviews with the team! Simply open up t" +
                  "he Uber app, swipe up on the Manchester United card and tap " +
                  "'Get Access' to enjoy exclusive content on your next ride. u" +
                  "br.to/manunited ",
              "label": "not-promo"
            }, {
              "text": "Mood this #weekend! Apply code POOLON to get $3 off unlimite" +
                  "d POOL rides till Sunday, 11:59PM. You’ve waited all week fo" +
                  "r Saturday, so step out and make the most of it! Limited red" +
                  "emptions available. ",
              "label": "promo"
            }, {
              "text": "It’s time for an #UberPopQuiz! Answer the question in the co" +
                  "mments and stand a chance to win $50 in Uber credits if you " +
                  "have the right answer. Not sure? Give it a shot and encourag" +
                  "e your friends to do the same. We’ll announce the answer tom" +
                  "orrow, so stay tuned! ",
              "label": "not-promo"
            }, {
              "text": "Bar-hopping this St. Paddy’s or simply heading home for some" +
                  " well-deserved rest? We’ll take you there for less. Apply co" +
                  "de POOLON to get $3 off unlimited POOL rides from Saturday, " +
                  "12AM - Sunday, 11:59PM! Remember, don’t drink and drive. We’" +
                  "re always here to get you home safe and affordably. Limited " +
                  "redemptions available. ",
              "label": "promo"
            }, {
              "text": "Travelling on a shoestring? Or indulging in a luxurious geta" +
                  "way? We’ve got ride options that that suit your travelling s" +
                  "tyle! Whether it’s uberPOOL, uberX, uberXL or more - all you" +
                  " need to do is choose. #UberEverywhere ",
              "label": "not-promo"
            }, {
              "text": "Pi might be irrational, but who could imagine life without i" +
                  "t. Happy World Pi Day to our fellow math geeks! Apply code H" +
                  "APPYPIDAY to get $3.14 off your uberX or uberPOOL ride to or" +
                  " from the Science Centre Singapore till March 15, 3:14AM, an" +
                  "d treat yourself to a generous dose of Pi. #PiDay",
              "label": "promo"
            }, {
              "text": "Save up to $35 on your weekday travel! Apply code 7RIDES and" +
                  " take 1 ride to get $5 off up to 7 uberX or uberPOOL rides f" +
                  "rom now till Friday, 11:59PM. Limited redemptions available." +
                  " ",
              "label": "promo"
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
              "text": "Make your dollar work twice as hard for you. With Grab, savi" +
                  "ng is as simple as booking a ride! From 25 to 31 March, enjo" +
                  "y $4 off when you book a GrabShare and pay by GrabPay (credi" +
                  "t/debit card). Promo code: 4SHARE. grb.to/4sharefb ",
              "label": "promo"
            }, {
              "text": "Thousands have tried GrabShare and loved it. See what you’re" +
                  " missing and enjoy rides that cost up to 30% less than GrabC" +
                  "ar's. This 23–31 March, book your first two GrabShare rides " +
                  "at $7 OFF with the promo code TRYSHARE. So if you’re not in " +
                  "a rush, try GrabShare and save today! More details here: grb" +
                  ".to/trysharefb.  Limited to 30K redemptions only. T&Cs apply" +
                  ". ",
              "label": "promo"
            }, {
              "text": "Faster, secure and with cost savings to boot. Find out how o" +
                  "ur in-app messaging feature GrabChat has changed the way we " +
                  "communicate when we ride. grb.to/chatting ",
              "label": "not-promo"
            }, {
              "text": "Stretch your dollar further with GrabShare. From 20-26 March" +
                  ", enjoy $5 off your second GrabShare ride of the day. Just p" +
                  "ay with GrabPay (debit/credit card) and apply the promo code" +
                  " 2SHARE. Valid on GrabShare rides only. Limited to the first" +
                  " 30,000 redemptions daily. grb.to/fb2share ",
              "label": "promo"
            }, {
              "text": "Happy FriYAY! GrabTaxi's 10am - 10pm promo will continue til" +
                  "l 28 March! Just use GrabPay (credit/debit card) to pay for " +
                  "your standard taxi rides and receive $7 OFF your fare! Enter" +
                  " promo code ' 1010 '. Promo ends at 10pm, 28 March 2017. Val" +
                  "id for standard taxi rides only. Limited redemptions daily. " +
                  "Other terms and conditions apply: grb.to/1010fb",
              "label": "promo"
            }, {
              "text": "Myth #1: You can't claim insurance in an accident. Did you k" +
                  "now that Grab offers an extra layer of free insurance above " +
                  "what's required by Singapore law? (Yup, we said free).  Read" +
                  " on to know more: http://grb.to/ridehail-myth",
              "label": "not-promo"
            }, {
              "text": "2 DAYS LEFT until the winning school takes the grand prize o" +
                  "f $10K worth of ride credits! NTU is in the lead but it seem" +
                  "s likely that NUS might overtake them anytime. So keep going" +
                  " with your GrabShare rides! #BallinWithGrab",
              "label": "not-promo"
            }, {
              "text": "It’s not only safe and more convenient when you pay with Gra" +
                  "bPay, it’s also FREE! Just add your credit/debit card to you" +
                  "r Grab account and use promo code NOCASH for 2 FREE rides. V" +
                  "alid for first-time GrabPay users only. Code discount will b" +
                  "e capped at $15 per ride.  Other terms and conditions apply:" +
                  " http://grb.to/nocash",
              "label": "promo"
            }, {
              "text": "Calling all parents with kids age 4-7 years old! Ensure safe" +
                  "r rides for your little one with a booster seat on GrabFamil" +
                  "y. Use code FAMILY to waive the surcharge of $2, up to 5 rid" +
                  "es, till 31 March! grb.to/gffb ",
              "label": "promo"
            }, {
              "text": "Travel plans for the upcoming week? Here's $8 off all Grab r" +
                  "ides (except GrabHitch) to Changi Airport and back. Promotio" +
                  "n valid from 10-19 March using GrabPay (credit or debit card" +
                  "), for 2 rides per person. Limited to 15,000 rides daily. gr" +
                  "b.to/flymarchfb",
              "label": "promo"
            }, {
              "text": "GrabFamily - the first on-demand, child booster seat-equippe" +
                  "d rides in Southeast Asia, is here! Now your little one aged" +
                  " 4-7 years old and weighing 15-36kg can ride safely.  Until " +
                  "31 March, we’re waiving the additional surcharge with $2 off" +
                  " your ride, with promo code: FAMILY Valid for 5 GrabFamily r" +
                  "ides from 10-31 Mar. Learn more at: grb.to/gffb",
              "label": "promo"
            }, {
              "text": "Enjoy $8 OFF late night GrabTaxi rides when you book with th" +
                  "is promo code. Valid till 31 March for Standard Taxi rides o" +
                  "nly. Other applicable terms and conditions here: grb.to/alln" +
                  "ightfb",
              "label": "promo"
            }, {
              "text": "Wrapping up our #WomenInTech series is Shivani - lead engine" +
                  "er for driver payments and all-round tech badass! Learn how " +
                  "she used her experience with gender prejudice to fuel her dr" +
                  "ive for success: grb.to/womenengineer ",
              "label": "not-promo"
            }, {
              "text": "Get $10 OFF your 2nd GrabTaxi ride of the day when you go ca" +
                  "shless with GrabPay. Valid only for GrabPay bookings. Other " +
                  "applicable terms and conditions here: grb.to/2ridefb",
              "label": "promo"
            }, {
              "text": "We’re bringing back $3 off GrabShare rides! Now’s your chanc" +
                  "e to get the most out of your week! Apply promo code SHARENO" +
                  "W. Valid from 6 Mar to 10 Mar, between 9am and 9pm, when you" +
                  " pay with your card. Hurry, limited redemptions only! More d" +
                  "etails at grb.to/sharenowfb",
              "label": "promo"
            }, {
              "text": "Psst, GrabShare is up to 30% cheaper than GrabCar! How would" +
                  " you spend the money saved from taking a GrabShare? We'd def" +
                  "initely spend it on coffee lah! 😉 #BallinWithGrab",
              "label": "not-promo"
            }, {
              "text": "Can't decide if you should splurge on your trip there or bac" +
                  "k? No sweat! Simply take a GrabCar, both ways, and you’ll ge" +
                  "t $8 off your second GrabCar ride everyday. Use promo code 8" +
                  "CAR and pay by card. Promotion is valid from 4 March to 10 M" +
                  "arch (9am-9pm). Max 1 redemption per user per day. Hurry, li" +
                  "mited redemptions available! More info at grb.to/8carfb",
              "label": "promo"
            }, {
              "text": "Say Hello to GrabShuttle! GrabShuttle is a new service that " +
                  "allows passengers to pre-book a seat from a list of fixed ro" +
                  "utes on our larger vehicles types. Get 3 free rides when you" +
                  " download the app and use the promo code GRABSHUTTLE. Valid " +
                  "till 31 March 2017. T&Cs apply. grb.to/shuttlefb Download th" +
                  "e GrabShuttle app today! iOS: http://grb.to/shuttle_ios Andr" +
                  "oid: http://grb.to/shuttle_adr",
              "label": "promo"
            }, {
              "text": "Tell us about a time you and a friend got more for less. Tag" +
                  " your partner-in-crime in your story. The 5 most creative en" +
                  "tries get $50 worth of ride credits.  Contest ends this Frid" +
                  "ay, 3 March at 2359hrs. Stay tuned in the coming week as we " +
                  "teach you how to get more for less. Don’t say we bo jio. #Ba" +
                  "llinWithGrab",
              "label": "not-promo"
            }, {
              "text": "Ever find yourself deliberately walking into a supermarket a" +
                  "t night just to raid the last-minute offers? As university s" +
                  "tudents, we've all had instances where we'd go to great leng" +
                  "ths just to stretch a dollar. With GrabShare, you won't need" +
                  " to as prices are up to 30% less than GrabCar's. Find out wh" +
                  "at some of our GrabShare users have to say! #BallinWithGrab ",
              "label": "not-promo"
            }, {
              "text": "Who says weekdays aren’t as fun as the weekends? With $3 off" +
                  ", you can get the most out of your week! Enjoy $3 OFF your G" +
                  "rabShare ride with promo code SHARENOW. Valid from 27 Feb to" +
                  " 4 Mar, between 9am and 9pm, when you pay with your card. Hu" +
                  "rry, limited redemptions only! More details at http://grb.to" +
                  "/sharenowfb",
              "label": "promo"
            }
          ],
          "cdg": [
            {
              "text": "Lights out in support of #EarthHour! Have you done your part" +
                  "? Share with us if you have done so! #ChangeClimateChange ",
              "label": "not-promo"
            }, {
              "text": "We thank all who showed up with their ComfortDelGro app this" +
                  " evening at our roadshow. And for those who missed us tonigh" +
                  "t, don't worry. We are just warming up and you can drop by a" +
                  "nd catch us again tomorrow. ",
              "label": "not-promo"
            }, {
              "text": "Last chance to win a NETS Flashpay card with $50 stored valu" +
                  "e and a mystery prize in the final round of the #EmojiExplor" +
                  "er contest! Head over to NETS page to participate! :) Submis" +
                  "sions here don't count! Contest ends 23 Mar 2017. T&Cs apply" +
                  ", visit http://bit.ly/2mjhJTw for more information. ",
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
              "text": "Partygoers should be familiar with the location for Round 2 " +
                  "of the #EmojiExplorer contest! Head over to NETS page to par" +
                  "ticipate! :) Submissions here don't count! Contest ends 9 Ma" +
                  "r 2017. T&Cs apply, visit bit.ly/2mjhJTw for more informatio" +
                  "n. ",
              "label": "not-promo"
            }, {
              "text": "The weekend is here (yay!) Whether you are heading out to pa" +
                  "rty under the stars, or heading home after a hard day's work" +
                  ", give yourself a treat! Take $8 off your taxi fare for trip" +
                  "s made between 11pm and 5am from 3-5 March with promo code S" +
                  "TARZ. Valid for the first 6000 redemptions, and limited to 1" +
                  " redemption per mobile number per day. T&Cs apply, visit bit" +
                  ".ly/CDGTaxisPromoCodeTCs for more information. ",
              "label": "promo"
            }, {
              "text": "It's the weekend! 💎 Hang out and party hard. Use 2NITE prom" +
                  "o code and enjoy $8 off the taxi fare for trips made between" +
                  " 11pm and 5am from 24-26 February. For the first 6000 redemp" +
                  "tions. Limited to 1 redemption per mobile number per day. T&" +
                  "Cs apply, visit bit.ly/CDGTaxisPromoCodeTCs for more informa" +
                  "tion. ",
              "label": "promo"
            }, {
              "text": "🗣🐔🎤🎶 and be merry! Get $8 off your taxi fare from 17 - 1" +
                  "9 February, with promo code NITECAB. Valid for trips made be" +
                  "tween 11pm and 4am, for the first 6000 redemptions. Limited " +
                  "to 1 redemption per mobile number per day. T&Cs apply, visit" +
                  " bit.ly/CDGTaxisPromoCodeTCs for more information.",
              "label": "promo"
            }, {
              "text": "Now that the Year of the Rooster is underway, let's keep the" +
                  " good times rolling - enjoy zero flag down fee with promo co" +
                  "de GST ! (aka ' GAM SIA TAXIS ') Valid from 31 Jan - 11 Feb 2017 for the first 4000 redempt" +
                  "ions daily. Limited to 1 redemption per mobile number per da" +
                  "y for current bookings only. T&Cs apply, visit bit.ly/CDGTax" +
                  "isPromoCodeTCs for more information.",
              "label": "promo"
            }
          ]

        }
      }
    }
  }
}
