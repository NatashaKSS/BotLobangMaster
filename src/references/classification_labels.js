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

module.exports = {
  classifications: {
    "F_&_B": {
      "category": {
        "fast_food": {
          "macdonalds": [
            {
              "text": "Satisfy your hunger with just a click! McDelivery delivers a" +
                  "nytime, anywhere. Order now via the McDelivery App or https:" +
                  "//www.mcdelivery.com.sg/ Vroom Vroom!",
              "label": "not-promo"
            }, {
              "text": "Hey folks, you may have seen stories about the use of ammoni" +
                  "a hydroxide in our burgers circulating online or via WhatsAp" +
                  "p. Well, it’s entirely untrue. Here in Singapore, we’ve neve" +
                  "r used beef treated with ammonia hydroxide or “pink slime”. " +
                  "You can rest assured that our beef patties in all your favou" +
                  "rite McDonald’s burgers are made from 100% beef from Austral" +
                  "ia and New Zealand!",
              "label": "not-promo"
            }, {
              "text": "Love Seoul Spicy’s supporting cast of Kimchi Shaker Fries, P" +
                  "each McFizz® and Melon McFlurry® with Coconut Jelly? Share t" +
                  "his fan poster and show them some love at mcdelivery.com.sg",
              "label": "not-promo"
            }, {
              "text": "Dear Valued Customers, we are performing scheduled system ma" +
                  "intenance and upgrading works on our McDelivery system from " +
                  "0400 hours to 0500 hours on 14 March 2017. Therefore, we are" +
                  " unable to accept McDelivery orders through our website, mob" +
                  "ile app and hotline during this period. You may wish to visi" +
                  "t our 24 hrs restaurants during this time. Please accept our" +
                  " sincere apologies for the inconvenience and bear with us in" +
                  " the meantime.",
              "label": "not-promo"
            }, {
              "text": "Find a yummy $5 Extra Value Meal™ for every craving at McDon" +
                  "ald’s®",
              "label": "not-promo"
            }, {
              "text": "Hash brown lovers, dig into this - our all-new Golden Prospe" +
                  "rity Beef Burger comes with a crispy hash brown, and goes gr" +
                  "eat with Prosperity Twister Fries™! You’ll also receive a se" +
                  "t of 6 limited edition red packets with every Golden Prosper" +
                  "ity Extra Value Meal™ you buy, while stocks last, so be like" +
                  " the rooster and get in early! Offer valid till 8 Feb.",
              "label": "not-promo"
            }
          ],
          "kfc": [
            {
              "text": "Share an #Oishiok meal with 4pcs of Shoyu Sansho Chicken, Ch" +
                  "eese Poppers, Nuggets & more!",
              "label": "not-promo"
            }, {
              "text": "Join us in celebrating Lazada’s 3rd birthday sale, with up t" +
                  "o 90% off and free delivery. New Lazada shoppers get an addi" +
                  "tional 18% off* storewide with promo code: KFCLAZBDAY. Shop " +
                  "now at https://www.lazada.sg/kfcbday17 *Discount capped at $" +
                  "8, T&Cs apply.",
              "label": "promo"
            }, {
              "text": "Kick-start your weekends with these Weekend Breakfast deals " +
                  "at great value! See more at: ",
              "label": "promo"
            }, {
              "text": "Experience an #Oishiok moment when you bite into our new Van" +
                  "illa Custard Puffs - creamy and smooth vanilla custard house" +
                  "d in a choux pastry that’s freshly baked to golden brown! At" +
                  " only $1.90 each, it’s indulgence in every bite! One is neve" +
                  "r enough, so buy 5 and get 1 free! See more at: http://bit.l" +
                  "y/2mYguvD #KFCCustardPuff #kfcsg",
              "label": "not-promo"
            }, {
              "text": "Limited time only! Simply flash this image to enjoy our #Ois" +
                  "hiok Sampler Set for only $3.50! #ShoyuSanshoKFC #kfcsg Not " +
                  "available at KFC Blk 381 Toa Payoh Lorong 1, Blk 501 Jurong " +
                  "West Street 51, Sentosa, KidZania and Singapore Zoo.",
              "label": "promo"
            }, {
              "text": "Rise and shine to these great Weekday Breakfast deals, start" +
                  "ing from only $3! See more at: ",
              "label": "promo"
            }, {
              "text": "KFC Delivery Super Value Deals - 10 pcs for $19.90 and $6 On" +
                  "line Exclusives",
              "label": "promo"
            }
          ],
          "burger_king": [
            {
              "text": "Did you know? It’s International Waffle Day! Celebrate with " +
                  "some Belgian Waffles and Ice Cream to make your weekend even" +
                  " sweeter. #BurgerkingSG",
              "label": "not-promo"
            }, {
              "text": "Mix and Match 2 burgers for only $4! Choose from classic Ham" +
                  "burger, tasty CHICK’N CRISP™ and tangy FISH ’N CRISP™. Avail" +
                  "able for a limited period. Find out more: http://bit.ly/2mRH" +
                  "Sv3 #BurgerKingSG",
              "label": "promo"
            }, {
              "text": "Perk up your value meals with Starbuys treats! #BurgerkingSG",
              "label": "not-promo"
            }, {
              "text": "Can’t get enough of The Ultimate Selection? Hit ‘Like’ for A" +
                  "ngus Beef or ‘Love’ for Tendercrisp™ Chicken! #BurgerkingSG",
              "label": "not-promo"
            }, {
              "text": "$2 ice cream floats are here! From 18 Mar - 24 Mar, #BurgerK" +
                  "ingSG is treating you to a Coke/Fanta Grape float for only $" +
                  "2. Here’s how: 1. Pause the video at the correct spot 2. Tak" +
                  "e a screenshot 3. Present your screenshot to any outlet 4. G" +
                  "et your delicious float for $2! Be sure to ‘LIKE’ our Facebo" +
                  "ok page and tag your friends to tell them about this awesome" +
                  " deal. While stocks last. Terms and conditions apply.",
              "label": "promo"
            }, {
              "text": "Enjoy a Single Mushroom Swiss Burger at just S$1! Simply hea" +
                  "d down to any Burger King outlets and pay with your UOB Card" +
                  "s using Apple Pay from now till 17 Mar 2017. Redemption only" +
                  " available after breakfast. T&Cs apply. Visit uob.com.sg/app" +
                  "lepay for more details.",
              "label": "promo"
            }, {
              "text": "Burgers are so good, we never want them to go away! Grab The" +
                  " Ultimate Selection™ today and enjoy extra thick and juicy A" +
                  "ngus beef in every bite. Available in Classic BBQ or Mushroo" +
                  "m Swiss. #BurgerkingSG",
              "label": "not-promo"
            }, {
              "text": "Indulge at a Burger King near you with StarBuys™ from $2! Cl" +
                  "ick here for more: http://bit.ly/2m0FeQK",
              "label": "promo"
            }, {
              "text": "Something sweet and sensational is coming your way! Get read" +
                  "y for a dessert worth waiting for. Can you guess what is it?" +
                  " #BurgerkingSG",
              "label": "not-promo"
            }, {
              "text": "BK Woodlands Exchange outlet will be closed for renovation f" +
                  "rom 4 to 11 March to serve you better and will resume busine" +
                  "ss on 12 March at 2pm. Head down to our other BK outlets at " +
                  "Fuchun Community Club and Sembawang Shopping Centre to get y" +
                  "our BK fix or let us deliver to you at BKdelivers.com.sg.",
              "label": "not-promo"
            }, {
              "text": "Enjoy the real taste of premium with The Ultimate Selectionᵀ" +
                  "ᴹ. Bite into extra thick and juicy Angus Beef or Tendercrisp" +
                  "ᵀᴹ Chicken layered in fresh, quality ingredients served on C" +
                  "orn Dusted Sourdough Buns. #BurgerkingSG",
              "label": "not-promo"
            }
          ],
          "pizza_hut": [
            {
              "text": "Meet your #CrustCrush at Pizza Hut today! Scroll 👉 to find " +
                  "the various cheesy deals to enjoy when you're dining in with" +
                  " us. Ps. DBS/POSB cardholders get 15% off A la carte Cheese " +
                  "Lovers' Pan Pizza.",
              "label": "promo"
            }, {
              "text": "Satisfy your pizza craving with some heartily warm pizzas, l" +
                  "ovingly made with our dough that's freshly prepared daily! T" +
                  "o be blessed with a cheery mood and a feel-good weekend ahea" +
                  "d, here’s what you need 👉 po.st/PizzaHutdelivers  📷 by @wh" +
                  "ere.is.karl on Instagram.",
              "label": "not-promo"
            }, {
              "text": "You're in for a double bonus! Here’s how: 1. Get a Large Haw" +
                  "aiian, Pepperoni or Veggie Lover’s pizza for ONLY $3*! Enter" +
                  " code ‘PIZZALAZADA’ at po.st/PizzaHutdelivers by 30 Mar 🍕🍕" +
                  "🍕 2. It's the last day of Lazada's 3rd Birthday Sale! Enjoy" +
                  " up to 90% off, flash deals, and new shoppers get an extra 1" +
                  "8%* off storewide with the below exclusive codes at www.laza" +
                  "da.sg/phbday17/ Get ‘em now! T&Cs apply.",
              "label": "promo"
            }, {
              "text": "<CONTEST> Help Sir Cheddar meet his #CrustCrush and perfect " +
                  "our Cheese Lovers’ crust! Simply capture the moment where th" +
                  "e two Cheddar Cubes meet and share your attempt below! One l" +
                  "ucky fan will stand to win 1X Regular Cheese Lovers’ Pan Piz" +
                  "za. 🧀🍕 Contest ends 26 March, 2359 hrs. T&Cs apply: po.st/" +
                  "SirCheddarContestTNC",
              "label": "not-promo"
            }, {
              "text": "Here's how everyone can be a winner! For just $3, get a Larg" +
                  "e Hawaiian, Pepperoni or Veggie Lover's pizza when you use t" +
                  "he code 'PIZZALAZADA' at po.st/PizzaHutdelivers by 30 March " +
                  "2017! T&Cs apply. Psst. Pop over to Lazada for a chance to w" +
                  "in free pizza 😉",
              "label": "promo"
            }, {
              "text": "Why stop at one pizza when you can have TWO, along with a bo" +
                  "nus of FREE sides?  Get a free 4pcs side with your 2-For-$22" +
                  ", and up your pizza game with a 2-For-$33! Scroll, salivate," +
                  " and order in today! 👉",
              "label": "promo"
            }, {
              "text": "Up your savings goal with Pizza Hut! Get a FREE 4pcs side of" +
                  " your choice, when you go 2-For-$22 on our regular Favorites" +
                  " range pizzas. Satisfy your tastebuds and wallet today: po.s" +
                  "t/PH-2For22Delivery",
              "label": "promo"
            }, {
              "text": "Pizza Hut’s people-pleaser tip! Grab a 1-For-1 Weekday Lunch" +
                  " to calm your ‘Hangry’ friends, while keeping your wallet ha" +
                  "ppy. Your weekday treat this way: bit.ly/PH-1F1WeekdayLunch",
              "label": "promo"
            }, {
              "text": "UPDATE: We're back! 😃 Thank you for your kind understanding" +
                  " while we're out. We've sorted the technical issues - let's " +
                  "resume the pizza happiness at www.phdelivery.com.sg 🍕",
              "label": "not-promo"
            }, {
              "text": "It’s International Women’s Day! Here's to all you wonderwome" +
                  "n who own a piz-za our hearts: we celebrate you, today and e" +
                  "very day! Psst. We’ve got a little surprise in store for you" +
                  " ladies! While stocks last 🌷",
              "label": "not-promo"
            }, {
              "text": "Are you ready for some football tonight? Check that list for" +
                  " the ultimate game night essentials and tell us which team y" +
                  "ou're rooting for! 😉⚽️ Score extra points with your favouri" +
                  "te pizzas delivered: bit.ly/PizzaHutdelivers",
              "label": "not-promo"
            }, {
              "text": "<CONTEST> Is YOUR #CrustCrush impressive enough? Guess the t" +
                  "otal number of Cheddar cubes on the Cheese Lovers’ crust and" +
                  " stand to WIN $20 dining vouchers. Closest number wins! Only" +
                  " ONE will be crowned the biggest Crust Crusher, but challeng" +
                  "e your friends too! Contest ends 7 March 2017, 2359 hours. T" +
                  "&Cs apply: bit.ly/2m1Qy1w Good luck! 🍕",
              "label": "not-promo"
            }, {
              "text": "Bring your #CrustCrush home for that exciting meet-the-famil" +
                  "y date! Along with the Cheddary crusted pizza, our Big Varie" +
                  "ty Box's got a little something for everyone to enjoy as wel" +
                  "l. Perfect your home party and order your 🍕🎁 today!",
              "label": "not-promo"
            }, {
              "text": "You're going to love this – enjoy our 6pcs Spicy Tangy Wings" +
                  " at ONLY $1! Apply the different promo codes below to spice " +
                  "up your à la carte pizza delivery order with these all-time " +
                  "favourite wings. Claim yours today! T&Cs apply.",
              "label": "promo"
            }, {
              "text": "We heard you – here’s the highly requested 2-For-$22 deliver" +
                  "y deal, with a BONUS! Pick 2 of your favourite regular pizza" +
                  "s and get a FREE 4pcs sides – all for $22 only! Reach your s" +
                  "avings goal with us and go #2For22 today. ✌️",
              "label": "promo"
            }, {
              "text": "It’s time to introduce our biggest #CrustCrush – the Cheese " +
                  "Lovers’ Pan Pizza! Indulge in an all-new Cheddary crusted pi" +
                  "zza topped off with a delightful mix of 7 savoury cheeses in" +
                  " every bite! Scroll 👉 for various ways to enjoy our latest " +
                  "pizza and find out how to get 15% off.",
              "label": "not-promo"
            }, {
              "text": "What’s pizza without a crust? Up your pizza game with these " +
                  "totally-not-crazy pizza pairings from us! 🍕 Vote for your f" +
                  "avourite pizza pair, or tell us your dream pizza creation in" +
                  " the comments below by 17th February, 2359! One lucky winner" +
                  " gets to taste his/her dream pizza. Get voting! 😏 *T&Cs App" +
                  "ly.",
              "label": "not-promo"
            }, {
              "text": "How are you celebrating this 元宵节? How about having a tuan yu" +
                  "an over a spread of these delicious Hut favourites! Happy 元宵" +
                  "节！ :)",
              "label": "not-promo"
            }, {
              "text": "Our 1-for-1 Weekdays Lunch menu gets BIGGER & BETTER! Enjoy " +
                  "a fast serving lunch experience with a wide variety of the a" +
                  "ll-time favourite Pizzas, Pastas and Entrées to choose from." +
                  " Learn more here: https://goo.gl/l1jUIV",
              "label": "promo"
            }
          ],
          "dominos": [
            {
              "text": "Say CHEESE! For a limited time only, enjoy FREE extra 100% M" +
                  "ozzarella Cheese toppings on any of our 2 Pizza Deals! Free " +
                  "Delivery. Order online now: http://bit.ly/2mhgfLG",
              "label": "promo"
            }, {
              "text": "TREAT YO'SELF TODAY! Only $2 to get ANOTHER Regular Pizza & " +
                  "2 Cans of Coca-Cola with every purchase of 1 Regular Pizza a" +
                  "t à la carte price! Order online now: http://bit.ly/2nL5VNn",
              "label": "promo"
            }, {
              "text": "This Pizza is Top Secret.  If you know what we’re talking ab" +
                  "out, then tell what it is.  Psssst! Wanna hear more top secr" +
                  "et news? For a limited time only, enjoy FREE extra 100% Mozz" +
                  "arella Cheese toppings on any of our 2 Pizza Deals! Free Del" +
                  "ivery.  Order online now: http://bit.ly/DominosAllDayValue",
              "label": "promo"
            }, {
              "text": "Heard about our Domino's Tapau Deal? It’s our Personal Pizza" +
                  " Deal at only $5? With 29 Personal Pizzas varieties, we're o" +
                  "n the lookout for the Top 5.  We’re curious to know your Top" +
                  " 5 favourite Domino’s Personal Pizza! Comment below. More de" +
                  "tails on the $5 Personal Deal and all varieties here: http:/" +
                  "/bit.ly/DominosPersonalPizza",
              "label": "not-promo"
            }, {
              "text": "Like Eye Candy, Domino’s Triple Treat are not only Yummy, th" +
                  "ey’re great value too. Order any 2 Pizza deals and enjoy any" +
                  " 3 sides for just $14. Tag a friend that you want to share t" +
                  "his Triple Treat with now. ;) Get it here today:http://bit.l" +
                  "y/DominosAllDayValue",
              "label": "promo"
            }, {
              "text": "Mama mia.. What is this Pizza that made it’s way to our menu" +
                  " all the way from Italia? Need a bigger hint than that chick" +
                  "en on a signpost? Well this pizza has Parmesan Cheese, Roast" +
                  "ed Chicken, Cherry Tomatoes, Ripe Olives, Mozzarella Cheese " +
                  "in Nepolitana Sauce. You can order it this weekend right her" +
                  "e: http://bit.ly/DominosSGPizzas",
              "label": "not-promo"
            }, {
              "text": "Enjoy our 2 Pizza Deals from only $22 and get FREE Extra 100" +
                  "% Mozzarella Cheese on both of them. PLUS, you'll get FREE d" +
                  "elivery too. Cheese is the way to go with Domino's. Tell us " +
                  "some of the cheesiest pick up lines you know. And click here" +
                  " to enjoy this cheesy, free delivery Domino's deal: http://b" +
                  "it.ly/DominosAllDayValue",
              "label": "promo"
            }, {
              "text": "Football Fans! Who will you be cheering for this weekend? Le" +
                  "t's make it a Domino's party, shall we? There's lots of hist" +
                  "ory between these 2 teams. So we're going to make it more in" +
                  "teresting. Tell us who do you think will win in the Liverpoo" +
                  "l vs Arsenal game (playing on 5 March 2017, at 1:30am Singap" +
                  "ore time) and what’s the score. 5 lucky fans who guessed the" +
                  " winning team correctly will win a Regular Pizza. 1 lucky fa" +
                  "n who guessed the correct score will win a Large Pizza. No p" +
                  "rizes if it’s a DRAW. Guessing closes 4 March 2017 at 11:59p" +
                  "m (Singapore time)",
              "label": "not-promo"
            }, {
              "text": "It's Monday. So let's be productive and figure out this Brai" +
                  "n Teaser: What looks like half a pizza?",
              "label": "not-promo"
            }, {
              "text": "Share this if you believe Domino's Pizzas are for sharing. T" +
                  "ag a friend you want to share your pizza with.",
              "label": "not-promo"
            }
          ],
          "pezzo": [
            {
              "text": "With such a wide variety of Pezzo pizzas, it must be tough t" +
                  "o just choose 1. Now you can get 2 slices of fresh handmade " +
                  "pizzas for just $7.90! (Not applicable for delivery and with" +
                  " other promotions. Valid till 31 March 2017)",
              "label": "promo"
            }, {
              "text": "Handmade freshly everyday, be sure to try our new Wasabi Pra" +
                  "wns pizza which combines wasabi mayonnaise and tangy Marie R" +
                  "ose Sauce with juicy prawns. Get a full pan for $26.70, or c" +
                  "hoose from our combo meals:  Wasabi Combo (1 pax) - $10.40, " +
                  " Wasabi Fiesta (2-3 pax) - $29.90,  Wasabi Party (4-5 pax) -" +
                  " $49.90. Visit our outlets or order online now! For more inf" +
                  "ormation on our combo meals, you may visit us at  www.pezzo." +
                  "com.sg/ Limited time offer only.",
              "label": "not-promo"
            }, {
              "text": "Last chance to win 4 x Admission Tickets to Sentosa! Simply " +
                  "spot the difference(s) in the picture and answer in the comm" +
                  "ents below. To qualify: 1) LIKE our FACEBOOK Page 2) Tag 3 o" +
                  "ther friends together with your answer NOTE: Only qualified " +
                  "participants stand a chance, only one entry will be counted " +
                  "per participant.",
              "label": "not-promo"
            }, {
              "text": "Why just have a slice of our pizza yourself when you can ord" +
                  "er our uniquely large 14 pan at just $17.90 to share! For a " +
                  "limited time only when you order through FoodPanda: https://" +
                  "Pezzo.foodpanda.sg. Promotions ends on 12 March 2017. Availa" +
                  "ble from selected stores only from 10am-5pm, Monday to Satur" +
                  "day. Limited to Hola Hawaiian, Chessy Cheese, Hot Chick and " +
                  "Very Veggie only. Terms & Conditions apply.",
              "label": "promo"
            }, {
              "text": "HAPPY NATIONAL PIZZA DAY! Come by and enjoy a 1-for-1 Cheesy" +
                  " Cheese special from 9 Feb to 12 Feb from 1pm to 5pm at all " +
                  "Pezzo outlets. Terms & Conditions apply.  Not valid at Pezzo" +
                  " Takashimaya, Changi Airport Terminal 2 and Sentosa. See you" +
                  " soon!",
              "label": "not-promo"
            }, {
              "text": "Couch and Netflix this weekend? Give the kitchen a break. Le" +
                  "t us spoil you with FREE DELIVERY on your next pizza purchas" +
                  "e from us with a minimum order of $25. Hurry! Offer ends 17 " +
                  "January 2017. ORDER NOW at https://pezzo.foodpanda.sg",
              "label": "not-promo"
            }, {
              "text": "Grab your Free Christmas gift now! Spend a movie session wit" +
                  "h your loves one. Stand a chance to win Free Assassins Creed" +
                  " free movie premium by following the steps as below. – Purch" +
                  "ase any slice of flamethrower pizza  – Post a picture of fla" +
                  "methrower pizza here. Order through: pezzo.foodpanda.sg Up t" +
                  "o 100pcs to be won, hurry now! While stock last.* #assassins" +
                  "creed #moviepremium #movies #freemovies #Christmas #Christma" +
                  "sgift #pizza",
              "label": "not-promo"
            }
          ],
          "4_fingers": [
            {
              "text": "Whoop Whoop! I won a FREE Upsize!  This is way too easy, I j" +
                  "ust bought some 4FINGERS, loaded the game up, entered my cod" +
                  "e and swapped some icons around... BOOM! Free food. Check it" +
                  " out here: Cluckthatgame.4fingers.com Terms and conditions a" +
                  "pply.",
              "label": "not-promo"
            }, {
              "text": "SO! Have you ever looked into one of our outlets and thought" +
                  " I know of an art piece that would go perfectly with this wa" +
                  "ll. Well we're looking to add to our graffiti wall art. Here" +
                  "'s a chance for you to have your favorite art pieces permane" +
                  "ntly displayed on our walls! OH and winners also get voucher" +
                  "s worth SGD100! Comment your selected pics into the comment " +
                  "section yea? #PosterCampaign4TW",
              "label": "not-promo"
            }, {
              "text": "Win crazy prizes like a MacBook Pro or a holiday to Melbourn" +
                  "e with some 5-star treatment. http://www.4fingers.com/promot" +
                  "ion-4FINGERS",
              "label": "not-promo"
            }
          ],
          "bubble_tea": {
            "koi": [
              {
                "text": "Don't wait for a job to fall on you! Come join us at our com" +
                    "ing recruitment drive at Suntec Convention Centre @STJOBS CA" +
                    "REER&DEVELOPMENT 2017 from 25th-26th March 2017, 10am-6pm or" +
                    " contact us @ 64405845/singaporehr@koicafe.com",
                "label": "not-promo"
              }, {
                "text": "Enjoy a $1 KOI Signature Macchiato! My Singtel App Exclusive" +
                    "! Login to My Singtel app > Rewards with your Singtel OnePas" +
                    "s and flash the promotion page to redeem this deal at KOI. T" +
                    "&Cs: - Promotion Period: 9 Feb to 22 Feb 2017. - Limited to " +
                    "first 10,000 cups, while stocks last. - Limited to 1 M size " +
                    "cup per customer per transaction. - Available at all KOI out" +
                    "lets except Changi Airport. - Offer is only valid to 3 flavo" +
                    "urs: Black Tea/ Green Tea/Oolong Macchiato - Enjoy 5% Dash c" +
                    "ash rebate when you pay with Singtel Dash - Offer cannot be " +
                    "used with other promotions. - KOI and Singtel reserves the r" +
                    "ight to terminate, suspend, amend the Terms & Conditions of " +
                    "this promotion. Find out more at singtel.com/rewards",
                "label": "promo"
              }
            ],
            "gong_cha": [
              {
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
            "coffee": {
              "starbucks": [
                {
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
              "coffee_bean_and_tea_leaf": [
                {
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
              "costa_coffee": [
                {
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
              "ya_kun": [
                {
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
              "toast_box": [
                {
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
            },
            "yoghurt": [
              {
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
            "ice_cream": {
              "baskin_robbins": [
                {
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
              "ben_and_jerrys": [
                {
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
              "cold_stone": [
                {
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
  }
}
