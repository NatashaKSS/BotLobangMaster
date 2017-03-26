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

// ===============================================
// F & B
// BUBBLE TEA, COFFEE, YOGHURT & ICE CREAM
// ===============================================

module.exports = {
  classifications: {
    "F_&_B": {
      "category": {
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
            }, {
              "text": "Have you received your tie? Now it's time to use it creative" +
                  "ly! Father’s Day “Thank You Tie” Creative Artwork Competitio" +
                  "n How to participate? -Create your own Father’s Day Celebrat" +
                  "ory Work using the “Thank You Tie” Sticker. You may utilise " +
                  "other personal items like cups, toys, stationeries or even y" +
                  "our Father. -Post a photo of the completed work on to “KOI T" +
                  "hé Singapore” Facebook Page. -Top three participants with th" +
                  "e most ‘Likes’, for the posted picture on our page at the en" +
                  "d of 26 Jun, will walk away with KOI Limited Edition Merchan" +
                  "dises. -Every participant is limited to a single entry only.",
              "label": "not-promo"
            }, {
              "text": "Don't be detained, be entertained!. Catch Dream Academy's br" +
                  "and new musical comedy about bad girls who do good! Like, sh" +
                  "are and tag 3 friends to win a pair of 'Detention Katong' ti" +
                  "cket(worth $160) from us! Detention Katong 17 Feb - 5 Mar 20" +
                  "17 Esplanade Theatre Tickets at SISTIC: http://www.sistic.co" +
                  "m.sg/events/ckatong0317 #DetentionKatong #DreamAcademySG *T&" +
                  "Cs apply *Contest ends on 26th Feb. *4 lucky winners will be" +
                  " selected and announced on Facebook, 27th Feb 2017.",
              "label": "not-promo"
            }, {
              "text": "Come meet us at the West Side of Singapore! Just like the po" +
                  "st, leave a comment 'KOI is opening on 24th Feb at Hillion M" +
                  "all' and tag three friends to entitle a chance to win KOI li" +
                  "mited edition merchandise from us! *Prize must be collected " +
                  "at this new outlet. *Contest ends on 23rd Feb. *3 lucky winn" +
                  "ers will be selected and announced on Facebook, 24th Feb 201" +
                  "7.",
              "label": "not-promo"
            }, {
              "text": "Join Us! To read more about the job description and responsi" +
                  "bilities, please click on the following link: http://www.koi" +
                  "the.com/upload/recruiten/1606091824501.jpg Submit your appli" +
                  "cation to kaiyin@koicafe.com, or call 64405845 for more enqu" +
                  "iry.",
              "label": "not-promo"
            }
          ],

          "gong_cha": [
            {
              "text": "Start showing your love to your 'Wonder Woman' who is Strong" +
                  ", Compassionate, Unique & Beautiful! Simply: 1) LIKE and SHA" +
                  "RE this post 2) TAG and share with us your ‘Wonder Woman’ in" +
                  " your life; my beautiful woman, great friend, beloved collea" +
                  "gues, wonderful mother and so on. We will pick 3 Wonder Wome" +
                  "n and send them one-month supply of Vitagen Collagen each! M" +
                  "ay our Wonder Women continue to inspire us! ·Contest ends Su" +
                  "nday, 12th Mar 2017, 12 midnight. ·Winners will be announced" +
                  " on Monday, 13 Mar ·Unlimited entries are welcome ·T&Cs appl" +
                  "y",
              "label": "not-promo"
            }, {
              "text": "Catching a performance that you have been waiting for, these" +
                  " few days? SISTIC loves to make your day out even better and" +
                  " sweeter. Book tickets from SISTIC with Mastercard® from now" +
                  " to 4 December 2016 and enjoy a cup of Gong Cha (worth $2.80" +
                  " and below)! Collect your SISTIC tickets from our local Auth" +
                  "orized Agents and redeem your free drink with the ticket rec" +
                  "eipt stub. With a minimum spend of S$50, while stocks last. " +
                  "Redemption is limited to selected outlets only. No reservati" +
                  "on or delivery of free drinks is allowed. T&C applies. (http" +
                  "://www.sistic.com.sg/promotions…)",
              "label": "promo"
            }, {
              "text": "Happy Children’s Day! On this special day, you’re entitled t" +
                  "o a 5% discount on your purchase if you show any Gong Cha x " +
                  "HJ Story merchandise (tumbler or bookmark) to our staff :) S" +
                  "ee you at your nearest store!",
              "label": "promo"
            }, {
              "text": "We’re bringing Gong Cha closer to you during your retail the" +
                  "rapy with our newest outlet at Wisma Atria (#B1-03)! Turn le" +
                  "ft after you exit the lift! You will spot us instantly! Come" +
                  " visit us at our new outlet for a 1-for-1 off all drinks tod" +
                  "ay - for all existing Gong Cha fans or you are new, just LIK" +
                  "E our Facebook page and show it to the cashier to claim this" +
                  " offer. 😊 Remember to keep your receipt to get your free to" +
                  "ppings during your next purchase! See you at the new store! " +
                  "Offer till Sunday! * 1-for-1 is limited to the first 100 dri" +
                  "nks only. One deal per customer. * Free drink must be the sa" +
                  "me drink. * Toppings offer is valid for the next 3 days, lim" +
                  "ited to black or white pearls only. A valid receipt from the" +
                  " ' Hello Gong Cha !' offer must be shown to claim this offer" +
                  ".",
              "label": "promo"
            }, {
              "text": "We’re bringing Gong Cha closer to you during your retail the" +
                  "rapy with our newest outlet at Wisma Atria (#B1-03)! Turn le" +
                  "ft after you exit the lift! You will spot us instantly! Come" +
                  " visit us at our new outlet for a 1-for-1 off all drinks tod" +
                  "ay - for all existing Gong Cha fans or you are new, just LIK" +
                  "E our Facebook page and show it to the cashier to claim this" +
                  " offer. 😊 Remember to keep your receipt to get your free to" +
                  "ppings during your next purchase! See you at the new store! " +
                  "Offer till Sunday! * 1-for-1 is limited to the first 100 dri" +
                  "nks only. One deal per customer. * Free drink must be the sa" +
                  "me drink. * Toppings offer is valid for the next 3 days, lim" +
                  "ited to black or white pearls only. A valid receipt from the" +
                  " ' Hello Gong Cha !' offer must be shown to claim this offer" +
                  ".",
              "label": "promo"
            }, {
              "text": "We’re bringing Gong Cha closer to you with our newest outlet" +
                  " at Northpoint Singapore (#b1-17)! Come visit us at our new " +
                  "outlet for a 1-for-1 off all drinks today - just LIKE our Fa" +
                  "cebook/Instagram page and show the page to the cashier to cl" +
                  "aim this offer. 😊 Keep your receipt to get free toppings du" +
                  "ring your next purchase! See you at the new store! *1-for-1 " +
                  "is limited to the first 100 drinks only. *Value of the free " +
                  "drink should be less than or equivalent to the purchased dri" +
                  "nk. * Toppings offer is valid for the next 3 days, limited t" +
                  "o black or white pearls only. A valid receipt from the 'Hell" +
                  "o Gong Cha!' offer must be shown to claim this offer.",
              "label": "promo"
            }, {
              "text": "Multiply your chances of winning in the Eat, Drink, Shop Hea" +
                  "lthy campaign! Just spot the week’s Multiply Your Match stic" +
                  "ker when you’re out and about, snap a photo against it (with" +
                  " your face and your game card value clearly shown), and uplo" +
                  "ad the picture to multiplyyourmatch.sg. You might just be a " +
                  "winner in the daily lucky draw! For more information and T&C" +
                  "s, visit multiplyyourmatch.sg. ",
              "label": "not-promo"
            }, {
              "text": "The best Moustache WEFIE wins 4 free Milk Foam drinks! Round" +
                  " up your family and friends for a WEFIE with your special GC" +
                  " moustache straw, and upload it to the comments section with" +
                  " the hashtag #gongchamilkfoam by Sept 25! The quirkier the p" +
                  "icture, the better! Start getting your moustache game on! Te" +
                  "rms & Conditions apply: http://bit.ly/2cv4wED",
              "label": "not-promo"
            }, {
              "text": "We love the Mid-Autumn Festival, and all the delicious moonc" +
                  "akes available during the season! Pair them with our new #go" +
                  "ngchamilkfoam drinks for a delightful evening, here are some" +
                  " of our recommendations: a. Milk Foam Honey Tea + Traditiona" +
                  "l Baked Mooncakes: Enhance the taste of the creamy lotus pas" +
                  "te found in traditional baked mooncakes with our Milk Foam H" +
                  "oney Tea. b. Milk Foam Chocolate Milk + Snowskin Mooncakes: " +
                  "These soft, smooth-skinned mooncakes deserve a complementary" +
                  " dessert pairing – try them with our Milk Foam Chocolate Tea" +
                  "! c. Milk Foam Tea with Oreo Cookies + Ice Cream Mooncakes: " +
                  "Add more of a crunchy touch to the Ice Cream Mooncakes with " +
                  "the Oreo cookie bits in this Milk Foam Tea! d. Milk Foam Mil" +
                  "k Tea + Buttery (Shanghainese) Mooncakes: Pair up this butte" +
                  "ry, pastry mooncake with a classic red tea-based drink, like" +
                  " our Milk Foam Milk Tea. e. Milk Foam Taro Milk + Flaky Crus" +
                  "t (Teochew) Mooncakes: For a modern Asian-inspired flair, th" +
                  "ese unique mooncakes can be matched with our Milk Foam Taro " +
                  "Tea. Happy Mid-Autumn Festival from all of us at Gong Cha! �" +
                  "� ",
              "label": "not-promo"
            }, {
              "text": "Show us your best Moustache Selfie and win 2 FREE Milk Foam " +
                  "drinks! Take a photo of yourself with our special GC moustac" +
                  "he straw and upload it to the comments section on Facebook o" +
                  "r on Instagram with the #gongchamilkfoam by Sept 11. Start g" +
                  "etting those ‘staches on ;) Terms and Conditions: http://bit" +
                  ".ly/2cABc1H #gongchamilkfoam ",
              "label": "not-promo"
            }
          ]
        },
        "coffee": {
          "starbucks": [
            {
              "text": "Sip some coffee, make some art. A blank tumbler is here, all" +
                  " ready for your creative touch. Purchase this 16oz Create-Yo" +
                  "ur-Own tumbler at $19.90 using your Starbucks Card and recei" +
                  "ve a limited edition Siren Starbucks Card (with $0 value). V" +
                  "alid while stocks last, not available for sale separately",
              "label": "not-promo"
            }, {
              "text": "Cheers to a delightful union of our signature Green Tea Frap" +
                  "puccino and freeze-dried strawberry bits that sit between tw" +
                  "o fluffy layers of strawberry whipped cream. The drink is th" +
                  "en topped off with green tea powder and more freeze-dried st" +
                  "rawberry goodness. #GreenTeaStrawberryBlossom #AvailableNow",
              "label": "not-promo"
            }, {
              "text": "❤️Balloons, ❤️Tumblers, ❤️Green Tea Strawberry Blossom Frapp" +
                  "uccino. Starbucks Rewards members, from 15 Mar, purchase thi" +
                  "s tumbler (16oz) at $24.90 with your Starbucks Card to enjoy" +
                  " a new Tall-sized Green Tea Strawberry Blossom Frappuccino o" +
                  "n us. Tumbler also comes with an additional complimentary dr" +
                  "ink voucher. T&Cs apply.",
              "label": "not-promo"
            }, {
              "text": "The coffee-go-round: where bearistas have endless coffee and" +
                  " pandas show-off their smooth moves. Spot the carriage with " +
                  "two of our cups, take a screen grab of it and flash it in st" +
                  "ores for a one-for-one treat. Valid from 20-24 Feb, on all h" +
                  "andcrafted drinks, all sizes. Limited to 2 redemptions per t" +
                  "ransaction. T&Cs apply.",
              "label": "promo"
            }, {
              "text": "A drink for you, a drink for me and a limited edition Card t" +
                  "o keep. Starbucks Rewards members, redeem your one-for-one t" +
                  "reat voucher and take home this Blackboard Starbucks Card. V" +
                  "alid from noon on 13 Feb to 17 Feb. Available on all drinks," +
                  " all sizes, while stocks last.",
              "label": "promo"
            }, {
              "text": "Let's toast again, cos one is free. From 27-29 Dec, 3-8pm, t" +
                  "reat yourself to any handcrafted beverage and enjoy another " +
                  "on us. Valid on all sizes. T&Cs apply.",
              "label": "promo"
            }, {
              "text": "No peeking until Christmas day. Each Starbucks Cheer Bag com" +
                  "es with one Create-Your-Own tumbler and another mystery tumb" +
                  "ler. Yours for $24.90. Available from 19 Dec. #GiftOfTheWeek" +
                  " bit.ly/StarbucksGiftFinder",
              "label": "not-promo"
            }, {
              "text": "A touch of holiday sparkle, ready to dazzle all year round. " +
                  "These Starbucks Swarovski mugs are yours for $49.90 (red) or" +
                  " $69.90 (white). From 5-11 Dec, pay with your Starbucks Card" +
                  " to enjoy 20% off these exclusive mugs. #GiftOfTheWeek bit.l" +
                  "y/StarbucksGiftFinder",
              "label": "not-promo"
            }, {
              "text": "A drink for you, a helping hand for others. Donate generousl" +
                  "y at any Starbucks store today, between 5-7pm and enjoy a Ta" +
                  "ll Christmas beverage on us. Limited to one redemption per p" +
                  "erson, while stocks last. All donations collected go to The " +
                  "Salvation Army.",
              "label": "promo"
            }, {
              "text": "Ooo, a new festive drink awaits: it’s red, it’s green and it" +
                  "’s oh-so-Christmassy. From 28-30 Nov, 3-8pm, treat yourself " +
                  "to any Venti Christmas drink and enjoy another on us. T&Cs a" +
                  "pply. #GiftOfTheWeek #RedRibbonGreenTeaLatte bit.ly/Starbuck" +
                  "sGiftFinder",
              "label": "promo"
            }, {
              "text": "Enjoy 40% off on our merry mugs and festive tumblers from no" +
                  "w until 25 Dec 2016. Not valid on Starbucks S'well Bottles, " +
                  "Coffee Press, City Relief mug and Pour-over Cone. ",
              "label": "promo"
            }, {
              "text": "Santa's little helpers left behind a trail of magical stardu" +
                  "st. From 14-20 Nov, these festive Cold Cups are yours for $1" +
                  "5.90 each. #GiftOfTheWeek bit.ly/StarbucksGiftFinder",
              "label": "not-promo"
            }, {
              "text": "A whimsical trio that keeps the holiday spirit alive all yea" +
                  "r round. Each Snow Mates set comes with one mini Starbucks C" +
                  "ard (choose between polar bear and squirrel). Yours for $49." +
                  "90. Available from 7 Nov. #GiftOfTheWeek http://bit.ly/Starb" +
                  "ucksGiftFinder",
              "label": "not-promo"
            }, {
              "text": "Grab your favorite friend and say yes to merry sips. Get any" +
                  " Christmas drink between 31 Oct - 4 Nov, between 3 - 8pm and" +
                  " enjoy another on us. Valid on all sizes, T&Cs apply. #GiftO" +
                  "fTheWeek http://bit.ly/StarbucksGiftFinder ",
              "label": "promo"
            }, {
              "text": "Enjoy 40% off on our merry mugs and festive tumblers from no" +
                  "w until 25 Dec 2016. Not valid on Starbucks S'well Bottles, " +
                  "Coffee Press, City Relief mug and Pour-over Cone. ",
              "label": "promo"
            }, {
              "text": "A splash of gold, a dash of glitter and a whole lotta festiv" +
                  "e cheer. Our newest stainless steel Cold Cups and Water Bott" +
                  "les are all ready for the holiday season. Each item comes wi" +
                  "th two treat vouchers. Available while stocks last, T&Cs app" +
                  "ly.",
              "label": "not-promo"
            }, {
              "text": "Cold Brew Youthberry Tea Full Recipe: bit.ly/ColdBrewYouthbe" +
                  "rry",
              "label": "not-cpromo"
            }
          ],
          "coffee_bean_and_tea_leaf": [
            {
              "text": "Dim lights, whispered conversations, warm beverages and the " +
                  "wonderful company of your loved ones. Sounds romantic, doesn" +
                  "'t it? This is how we are planning to spend the evening, ove" +
                  "r at select #CoffeeBeanSG outlets. Join us between 8.30 pm -" +
                  " 9.30 pm — it's one way to ensure you have a Happy Earth Hou" +
                  "r!",
              "label": "not-promo"
            }, {
              "text": " #CoffeeTip: Love a strong dose of caffeine in the morning? " +
                  "Go for a medium roast! Contrary to popular belief, roasting " +
                  "only brings out the flavour of the beans, but does not make " +
                  "them more potent. In fact, the longer the beans are roasted," +
                  " the less caffeine they retain. With walnutty notes and a so" +
                  "ft fruity aftertaste, our Brazil Single Origin Coffee is the" +
                  " perfect medium roast to start your day with. Order it today" +
                  ": https://www.coffeebean.com.sg/…/coffee…/brazil-single-orig" +
                  "in #CoffeeBeanSG",
              "label": "not-promo"
            }, {
              "text": "With a decadent layer of mascarpone cheese, generously sprin" +
                  "kled with cinnamon dust and spices, the Mexican Chocolate Ca" +
                  "ke with Cinnamon Mascarpone Frosting hits your taste-buds ri" +
                  "ght where they love it most. Try it out: https://www.coffeeb" +
                  "ean.com.sg/…/feat…/mexican-chocolate-cake #CoffeeBeanSG",
              "label": "not-promo"
            }, {
              "text": "Looking for a tasty adventure? We’re serving up a whole lot " +
                  "of them, over at #CoffeeBeanSG. Yes, we have just introduced" +
                  " a host of new items in our menu! Drop by to treat your tast" +
                  "ebuds to exciting new tastes and flavours with hearty breakf" +
                  "asts, scrumptious pastas and delicious sandwiches oozing wit" +
                  "h cheese — and all at $2 off when you pay with The Coffee Be" +
                  "an Card by 15 March 2017. T&C: Not available at Marine Cove," +
                  " Holland Village, JEM, Compass One, Palawan Beach Sentosa an" +
                  "d Imbiah Station Sentosa",
              "label": "promo"
            }, {
              "text": "Have you embraced the mobile payment trend yet? Here at #Cof" +
                  "feeBeanSG, it offers you more than just convenience. Don’t f" +
                  "orget, if you pay through Mastercard® using Samsung Pay, you" +
                  " get a 1+1 offer on #IceBlended drinks. A handy thing to rem" +
                  "ember the next time you’re craving coffee with friends!",
              "label": "promo"
            }, {
              "text": "Since time immemorial, traditional Mexican chocolate has bee" +
                  "n used to make some of the most delicious beverages. Dressed" +
                  " with cinnamon sugar and spices, its bold flavours are belie" +
                  "ved to date back to the ancient Aztec civilisation! Taste ou" +
                  "r new Mexican Chocolate range of beverages to learn more abo" +
                  "ut the heritage. Drop by at your nearest #CoffeeBeanSG store" +
                  " to enjoy these unique flavours as a #latte or #IceBlended.",
              "label": "not-promo"
            }, {
              "text": "It’s a good week to invite an old friend for brunch or to pl" +
                  "an out a date night with your partner. Wondering why? Well, " +
                  "our #CoffeeBeanSG coupons are still valid, and will get you " +
                  "a 50% discount on the second of breakfast set, sandwiches or" +
                  " pastas. Go ahead —flash it for treats, right up until 1st M" +
                  "arch.",
              "label": "promo"
            }, {
              "text": "Eat to your heart’s content. If anyone questions you — invit" +
                  "e them to join in! When you get a 50% discount on the second" +
                  " set of breakfast, sandwiches or pastas, treating someone be" +
                  "comes easier than ever. Just download & flash the coupon bef" +
                  "ore heading down to your nearest #CoffeeBeanSG outlet, and t" +
                  "uck right in.",
              "label": "promo"
            }, {
              "text": "TGIF! Do you love wrapping up a busy week with a good friend" +
                  "? We do too. If you’re a friend of ours on Facebook, now’s y" +
                  "our last chance to enjoy a cool 1+1 offer on our Passion Fru" +
                  "it Sparkling Tea. Drop in at any #CoffeeBeanSG outlet to tak" +
                  "e advantage of the offer — and don’t forget to get your frie" +
                  "nd along! *T&C:- Offer valid from 8th Feb to 10th Feb Offer " +
                  "applicable for those who show that they are our fans on Face" +
                  "book",
              "label": "promo"
            }, {
              "text": "Yay! We are honoured to have the love and support of 200,000" +
                  " fans on Facebook today. Are you one of the fabulous 200,000" +
                  "? Here’s a token of our appreciation — head to your nearest " +
                  "#CoffeeBeanSG store today to enjoy a 1-for-1 offer on our Pa" +
                  "ssion Fruit Sparkling Tea. *T&C:- Offer valid from 8th Feb t" +
                  "o 10th Feb - Show us that you are our fan on Facebook to ava" +
                  "il this offer",
              "label": "promo"
            }, {
              "text": "Be it Grandma's delicious pineapple desserts or golden chunk" +
                  "s of the fruit itself, our beloved Ong Lai has always been a" +
                  " delicious symbol of wealth and luck. This Chinese New Year," +
                  " our Piña Delight range of drinks lets you welcome prosperit" +
                  "y with every sip. Have you tried it yet? #CoffeeBeanSG",
              "label": "not-promo"
            }, {
              "text": "Christmas has come early, and quite literally too! Here's yo" +
                  "ur first gift — our #20thAnniversary surprise. Get our scrum" +
                  "ptious Gingerbread Man for just $2 with any beverage you pur" +
                  "chase. Let the festivities begin. #CoffeeBeanSG",
              "label": "promo"
            }, {
              "text": "Throwing a holiday party? With a playful combination of past" +
                  "a, turkey, yogurt and fruits, our savoury #PartyPackOfTheMon" +
                  "th promises to kickstart the festivities in the yummiest way" +
                  " possible. #CoffeeBeanSG Order it here: https://www.coffeebe" +
                  "an.com.sg/…/holiday-…/savoury-party-pack",
              "label": "not-promo"
            }, {
              "text": "What does #Christmas taste like? A whole lot of dark chocola" +
                  "te ganache cake, oozing with choco mousse, we'd say! Our Cla" +
                  "ssic Log Cake is here again, and it's winning hearts as the " +
                  "#CakeOfTheWeek! What's more, you also get a $10 early bird d" +
                  "iscount on your log cake if you order it online before the 3" +
                  "0th of November! Get it today: http://bit.ly/2gg40e1",
              "label": "promo"
            }, {
              "text": " The wheels of time will spin. Months will fly by. But as lo" +
                  "ng as we're still in our 20th year, the offers will keep com" +
                  "ing. Got a #CoffeeBeanSG card? Well, flash it to avail a 20%" +
                  " off on your favourite Ice Blended drinks. #20thAnniversary " +
                  "#special",
              "label": "promo"
            }, {
              "text": "The essence of winter captured in a cup. Is there a better w" +
                  "ay to celebrate this Holiday season than by sipping on a war" +
                  "m and frothy cup of a traditional tea? Yes, we didn’t think " +
                  "so either. Go and grab a cup of our Winter Dream Tea Latte t" +
                  "oday! #CoffeeBeanSG",
              "label": "not-promo"
            }, {
              "text": "Some people put up the Christmas tree. Some people hang pret" +
                  "ty lights. We whip up our Red Velvet Hot Cocoa. 'Tis how you" +
                  " know Christmas is around the corner! What's your favourite " +
                  "festive custom? (Apart from sipping on this delicious treat," +
                  " of course!) #CoffeeBeanSG #yummy #RedVelvet",
              "label": "not-promo"
            }
          ],
          "costa_coffee": [
            {
              "text": "Bring your own mug or tumbler to enjoy 50¢ off your coffee p" +
                  "urchase! Any mug or tumbler. Any. #BYOMug #BYOTumbler",
              "label": "promo"
            }, {
              "text": "Feeling hungry? Grab a bite at Costa Coffee and try our new " +
                  "Mediterranean Flatbread featuring a fresh medley of vegetabl" +
                  "es. (Important note: it tastes extra delicious with an Old P" +
                  "aradise Street No.19 roast Flat White!) ",
              "label": "not-promo"
            }, {
              "text": "Say hello to our limited edition roast, Old Paradise Street " +
                  "No.19. Over the next 19 days, the first 19 customers to purc" +
                  "hase an Old Paradise Street No. 19 coffee will receive a lit" +
                  "tle luxury to make their day a little more special. T&Cs app" +
                  "ly. http://bit.ly/2mmAmGw Follow us on Instagram to get a sn" +
                  "eak peek on all the little luxuries, coming to a store near " +
                  "you. https://www.instagram.com/costacoffeesg",
              "label": "promo"
            }, {
              "text": "Get 50¢ off your coffee when you bring your own mug or tumbl" +
                  "er to Costa! Whether it’s green, purple or red, we love and " +
                  "welcome all. #BYOMug ",
              "label": "promo"
            }, {
              "text": "In a rush this morning? We have just the thing for you. Grab" +
                  " a Salted Caramel Croissant and a Flat White for an extra de" +
                  "licious start to your day. ",
              "label": "not-promo"
            }, {
              "text": "Have you tried our addictive new Green Tea croissant yet? So" +
                  "me say it goes really well with the Flat White. Try it and s" +
                  "ee if you agree. ",
              "label": "not-promo"
            }, {
              "text": "Need a double boost of energy as you prep for the CNY festiv" +
                  "ities? Head down to any Costa store today to grab 2 Blackber" +
                  "ry and Raspberry Fruit Coolers for price of 1. It’s a sure w" +
                  "ay to usher in a Berry Happy Chinese New Year. T&Cs apply. h" +
                  "ttp://bit.ly/2jwRAle Available till 29.01.17",
              "label": "promo"
            }, {
              "text": "Short, intense and packed with flavour. Have you enjoyed you" +
                  "r handcrafted Corto of choice for only SGD1? Simply purchase" +
                  " any Costa coffee along with a food item before 11am over th" +
                  "e next few days to receive your $1 Corto voucher. Limited to" +
                  " the first 50 customers. Terms & conditions apply. Valid til" +
                  "l 13 Jan.",
              "label": "promo"
            }, {
              "text": "What's better than a cup of coffee on a Monday? Two cups of " +
                  "coffee, of course! All this week, the first 50 customers who" +
                  " purchase a coffee and a food item before 11am, will get to " +
                  "enjoy a handcrafted Corto for only SGD1 between 3 - 5pm. Val" +
                  "id at all Costa Singapore stores. Terms & conditions apply.",
              "label": "promo"
            }, {
              "text": "Time to take a breather before the Christmas weekend begins." +
                  " We've got freshly baked Cranberry Pistachio Chai Muffins an" +
                  "d Salted Caramel Coconut Muffins waiting for you to savour a" +
                  "longside our Honeycomb Hot Chocolate and indulgent Salted Ca" +
                  "ramel Frostino. #Costasg #CostaChristmas #MerryChristmas",
              "label": "not-promo"
            }, {
              "text": "Make a difference this Saturday, 17 December by decorating y" +
                  "our very own Gingerbread Men at Costa 313@somerset. With all" +
                  " profits from cookie sales going to the Children's Wishing W" +
                  "ell, it's a meaningful way to spread the Christmas cheer. #C" +
                  "ostasg #CostaChristmas #MerryChristmas #GingerbreadMan ",
              "label": "not-promo"
            }, {
              "text": "Are you still feeling the heat? We're topping up our 1-FOR-1" +
                  "s with our creamilicious Frostinos available at all Costa st" +
                  "ores! Get one for you and a friend today. Available for all " +
                  "medio-sized purchases, T&Cs apply bit.ly/2d6WlNR. Valid till" +
                  " 30.08.16 #Costasg",
              "label": "promo"
            }
          ],
          "ya_kun": [
            {
              "text": "Dear loyal fans, we are sad to announce that our Tangs outle" +
                  "t will be closing and our last day of operations will be on " +
                  "Tuesday, 21st March 2017. We would like to thank you for all" +
                  " the years of warm support by offering a 10 percent storewid" +
                  "e discount on 20 & 21 March 2017, exclusively at our Tangs o" +
                  "utlet. We hope to see you soon! ",
              "label": "promo"
            }, {
              "text": "Love our Ya Kun Kaya and Kaya Butter/Pistachio Cookies? Then" +
                  " head down to the nearest Ya Kun outlet to enjoy 2 Kaya Jars" +
                  " ($10.40) at $9.50 or 1 Kaya Jar and 1 Cookies at $7.50 (U.P" +
                  ". $8.60)! Available till 31 January 2017 at all Ya Kun outle" +
                  "ts except Singapore Poly. ",
              "label": "promo"
            }, {
              "text": "'Tis the season to be jolly, and we would like to celebrate " +
                  "this Ho-Ho Holiday with our 1-For-1 Chocoffee Tiramisu Frost" +
                  "yz! So gather your friends and loved ones and indulge in thi" +
                  "s sweet treat~ Available at Ya Kun @ Central, Changi City Po" +
                  "int, HDB Hub, JEM and Paragon outlets only, from 2PM onwards" +
                  " for today and tomorrow.",
              "label": "promo"
            }, {
              "text": "Wake up to the delicious taste of our Laksa Breakfast Set ev" +
                  "ery morning! Come rain or shine, you can always kickstart yo" +
                  "ur day with our Laksa in a cup, Kaya Toast with Butter, and " +
                  "Hot Coffee/Tea! Available at Ya Kun @ Ang Mo Kio, Compass On" +
                  "e, Sun Plaza, and White Sands only, from 13 February to 16 A" +
                  "pril 2017, 8.30am – 11am daily. Terms and conditions apply.",
              "label": "not-promo"
            }, {
              "text": "In celebration of the merriest season of the year, we are of" +
                  "fering two Chocoffee Tiramisu Frostyz for the price of one t" +
                  "his Friday and Saturday! Forget all the things you’ve encoun" +
                  "tered this week and cheers to a great weekend ahead! Availab" +
                  "le at Ya Kun @ ION, TANGS, Jurong Point, Parkway Parade and " +
                  "Ng Teng Fong Hospital, from 2pm onwards.",
              "label": "promo"
            }, {
              "text": "We're so excited that it’s Friday, because we’re having a 1-" +
                  "for-1 Chocoffee Tiramisu Frostyz promotion today! This time," +
                  " it’ll be available in Ya Kun @ Compass One, Causeway Point," +
                  " SAFRA Mount Faber, Sun Plaza, and White Sands Shopping Mall" +
                  ", from 2pm onwards. See you there!",
              "label": "promo"
            }, {
              "text": "It’s the most joyous time of the year, and we’re having a gr" +
                  "eat Christmas Giveaway Contest 2016! We caught our cheeky Sa" +
                  "nta popping in and out of the video while our chef is prepar" +
                  "ing our Nutella Cheese Toast, and we’ve caught it on film! T" +
                  "o enter this contest, simply tell us the number of times San" +
                  "ta Claus* appeared in our video in the ‘Comments’ section be" +
                  "low, and 10 lucky winners will walk away with $20 Ya Kun vou" +
                  "chers and 2 Christmas Bundles each! *Excluding the actual Sa" +
                  "nta Claus paper our chef used to prepare our Nutella Cheese " +
                  "Toast Our Christmas Giveaway Contest 2016 ends on Sunday, 11" +
                  "th December 2016 at 11.59PM. Click goo.gl/KcfxAz for T&Cs. R" +
                  "emember to like us on Facebook as we’ll announce the 10 luck" +
                  "y winners here on Monday, 12th December 2016! Good luck ever" +
                  "yone!",
              "label": "not-promo"
            }, {
              "text": "Feeling Fridaylicious? You should, because we’re having a 1-" +
                  "for-1 Chocoffee Tiramisu Frostyz promotion in Ya Kun @ 313 S" +
                  "omerset, Bedok Mall, Changi City Point, Junction 8, and TANG" +
                  "S outlet, from 2pm onwards. Head down to any of these outlet" +
                  "s and enjoy this promotion today!",
              "label": "promo"
            }, {
              "text": "To all our loyal fans, we are sad to announce that our Fusio" +
                  "nopolis outlet will be closing due to planned renovations of" +
                  " the mall and our last day of operations will be on 30 Novem" +
                  "ber 2016, Wednesday. To thank you for your support over the " +
                  "years, we will be offering 10% off storewide from now till 3" +
                  "0 November 2016 in Ya Kun @ Fusionopolis. We hope to be back" +
                  " soon! ",
              "label": "promo"
            }, {
              "text": "It’s beginning to look a lot like Christmas, and something c" +
                  "hocolately is coming to town! In just two days, we will be l" +
                  "aunching our most magnificent Christmas offerings yet! Can y" +
                  "ou guess what they are? Ya Kun will also be donating a part " +
                  "of the proceeds from our Christmas campaign to Make-A-Wish F" +
                  "oundation. For more information, visit www.makeawish.org.sg " +
                  "So share the joy with everyone and celebrate Christmas with " +
                  "us soon!",
              "label": "not-promo"
            }, {
              "text": "Want to be a part of the Ya Kun family? Then join us at #FLA" +
                  "sia2016 to find out more on how to be our franchisee. We'll " +
                  "be at Marina Bay Sands Hall B Level 1 Booth D03 today and to" +
                  "morrow from 10.30am - 6.30pm, and Saturday 10.30am - 5.30pm." +
                  " Get to enjoy a free cup of coffee, our signature Kaya Toast" +
                  " with Butter, and other exclusive Ya Kun gifts when you join" +
                  " us #FLAsia2016! See you there!",
              "label": "promo"
            }, {
              "text": "Good news everyone! Our outlet in Clementi Mall (#B1-21/23) " +
                  "is reopen after an extensive one month renovation! Show your" +
                  " support and visit our newest and slickest outlet today! ",
              "label": "not-promo"
            }
          ]
        },
        "yoghurt": {
          "llao-llao": [
            {
              "text": "Introducing llaoday! From 21st March onwards, everyone gets " +
                  "a yummy 20% off your bill from 11am to 4pm when you get your" +
                  " small, medium and large tubs EVERY TUESDAY! Enjoy your froy" +
                  "o and llao away~ - Valid at all outlets except NUH & Plaza S" +
                  "ingapura. - Not valid with any other promotions, discounts a" +
                  "nd/or offers. - While stocks last.",
              "label": "promo"
            }, {
              "text": "One more day to the opening of our newest store at Clementi " +
                  "Mall! Come visit us for your TGIF llaollao fix! Photo by iro" +
                  "nsage ",
              "label": "not-promo"
            }, {
              "text": "Today marks the last day of operation for our outlet in Sing" +
                  "apore Poly. We will miss you, however fret not, you can stil" +
                  "l get your llaollao fix over at the nearest store at One@Ken" +
                  "tRidge. See you there! ",
              "label": "not-promo"
            }, {
              "text": "UOB Cardholders, it's one for all and all for one! Get your " +
                  "$1 Sanum before it's gone! Simply pay using your UOB card by" +
                  " UOB Mighty app, Apple Pay or Andriod Pay and walk away with" +
                  " your Sanum at only $1! Valid at 23 selected outlets only. N" +
                  "ot valid at Marina Square, Singapore Polytechnic, Plaza Sing" +
                  "apura, Westmall, Suntec City and United Square.T&Cs apply.",
              "label": "promo"
            }, {
              "text": "Yes, it is true! Grab your favourite Sanum at just $1 this w" +
                  "eek from 6 - 10 March when you pay with your mobile using UO" +
                  "B's Mighty app! T&Cs apply. More details at uob.com.sg/apple" +
                  "pay. Valid at 23 selected outlets only. Not valid at Marina " +
                  "Square, Singapore Polytechnic, Plaza Singapura, Westmall, Su" +
                  "ntec City and United Square.",
              "label": "promo"
            }, {
              "text": "Dear beloved customers, we are very sorry to inform that the" +
                  " circulating promotion of $1 Sanum for UOB cardmembers from " +
                  "20 - 24 February 2017 is removed until further notice, due t" +
                  "o a backend technical fault. We sincerely apologise for the " +
                  "confusion and any inconvenience caused. Please watch this sp" +
                  "ace for updated llaollao promotions. For more information re" +
                  "garding the $1 Sanum UOB promotion, please contact UOB Call " +
                  "Centre at 1800 222 2121. Thank you.",
              "label": "promo"
            }, {
              "text": "Round 2 for Guess-and-Win! Have you had the slightest hint o" +
                  "n the location of our 30th store in Singapore? Spot this ico" +
                  "nic place where trains and cars used to moooove together! On" +
                  "e lucky winner gets to walk away with $50 worth of llaollao " +
                  "vouchers! Spot and comment your answer below to win, contest" +
                  " closes on 18 February 2017, 11.59pm.",
              "label": "not-promo"
            }, {
              "text": "Love is in the air! Let us be part of your special day with " +
                  "your loved ones! Get 1 small tub and 1 medium tub for $8.80 " +
                  "(U.P. $10.80), only on 14 February 2017! Promotion is not va" +
                  "lid with any ongoing promotions, discounts and vouchers. Val" +
                  "id at all stores except Westmall outlet. See you there! <3",
              "label": "promo"
            }, {
              "text": "Feeling thirsty? Get your free Sensations with every purchas" +
                  "e of Sanum and feel refreshed for the day! Only valid in lla" +
                  "ollao Hougang Mall. ",
              "label": "promo"
            }, {
              "text": "Savour your llaollao temptations if you are at Mall Kelapa G" +
                  "ading! Say hello to our 5th store in Indonesia! 😁 ",
              "label": "not-promo"
            }, {
              "text": "CNY Feast starts today! llaollao for your gathering with fri" +
                  "ends and family is simply paradise! Our CNY Takeaway Pack pr" +
                  "omotion is still on! Free 1 additional topping with Medium t" +
                  "akeaway pack at $11 (u.p.: $11.80) Free 2 additional topping" +
                  "s with Large takeaway pack at $18 (u.p.: $19.60) Promotion i" +
                  "s valid from 3rd January to 11 February 2017 at all outlets " +
                  "except llaollao Singapore Polytechnic. While stocks last. Go" +
                  "gogo! ",
              "label": "promo"
            }, {
              "text": "[BOXING DAY GIVEAWAY] We heard you and we brought in more fo" +
                  "r you! Free llaoglass with any purchase above $10 at all out" +
                  "lets except SP & NTU. Only on Boxing Day, 26 Dec! Not valid " +
                  "for $10 llaollao voucher redemption. Other T&Cs apply.",
              "label": "promo"
            }
          ],

          "milk-and-honey": [
            {
              "text": "Calling all students born in 1996 - 2000! In celebration of " +
                  "the release of the 'A' Level results this Friday, we're givi" +
                  "ng you a free topping* with any cup purchased! Simply flash " +
                  "your student pass during purchase to enjoy your treat! Promo" +
                  "tion runs only for the next 3 days so act fast! *Terms & Con" +
                  "ditions: Student pass must be presented during purchase. Fre" +
                  "e topping (worth $1) comes with any cup purchase and is limi" +
                  "ted to 1 redemption per student pass per day. Valid at all M" +
                  "ilk & Honey outlets from 24 - 26 February 2017. Not valid wi" +
                  "th other discounts, promotions or privileges. #milkandhoney_" +
                  "sg #EveryCupIsAnArt #artisan #yogurt #dessert #parfait #froy" +
                  "o #treat #ALevels #toppings",
              "label": "promo"
            }, {
              "text": "Get into the New Year mood with us at our new outlet (find u" +
                  "s at #01-06) in Northpoint! 🎉 Receive a free topping (worth" +
                  " $1) for DIY parfaits when you follow us on Instagram! This " +
                  "special opening promotion is only valid at Northpoint from t" +
                  "oday till 14 Jan 2017! Remember to hashtag us #milkandhoney_" +
                  "sg #EveryCupIsAnArt and stand to win Milk & Honey vouchers! " +
                  "☺️ #milkandhoney_sg #EveryCupIsAnArt #artisan #yogurt #desse" +
                  "rt #handcrafted #topping #parfait #northpoint #yishun #openi" +
                  "ng #promotion",
              "label": "promo"
            }, {
              "text": "☃️🎄Milk & Honey Christmas Instagram Gift-Away🎄☃️ . Do you " +
                  "hear the jingle bells ringing? That's because we're giving a" +
                  "way our 2 best sellers: Macaron Gift boxes and handcrafted c" +
                  "ookies in a jar to 2 lucky winners from this post! To partic" +
                  "ipate, simply follow the steps below: 1. Follow us @milkandh" +
                  "oney_sg and guess the handcrafted topping that we are making" +
                  " by commenting on this post with your answer 2. Tag 1 friend" +
                  " that you would like to share the prize with 3. 2 winners wi" +
                  "ll be selected from this post. Winners will be announced by " +
                  "end Jan 2017. Maximize your chances of winning by commenting" +
                  " on our last post tomorrow! Good luck! 😉 #milkandhoney_sg #" +
                  "EveryCupIsAnArt #Christmas #giveaway #handcrafted #topping",
              "label": "not-promo"
            }, {
              "text": "Christmas is around the corner and we're having a Christmas " +
                  "Gift-Away on Instagram with prizes such as Milk & Honey vouc" +
                  "hers, macarons, cakes and the grand prize of a luxurious hot" +
                  "el stay! 🎄🎅🏼 To kick things off, we're giving away 1-for-" +
                  "1 Petit yogurt vouchers and Cash vouchers (exclusive to Jem)" +
                  " to 2 lucky winners from this Instagram post! To participate" +
                  ", simply hop over to Instagram and follow the steps below: 1" +
                  ". Guess the handcrafted topping that we are making and give " +
                  "us your answer by commenting on this Instagram post 2. Tag a" +
                  " friend that you would like to share the prize with 3. 2 win" +
                  "ners will be selected from this post. Winners will be announ" +
                  "ced by end Jan 2017. Maximize your chances of winning by com" +
                  "menting on our upcoming 5 other Instagram posts! Good luck! " +
                  "#milkandhoney_sg #EveryCupIsAnArt #Christmas #giveaway #hand" +
                  "crafted #topping #Instagram",
              "label": "not-promo"
            }
          ]
        },
        "ice_cream": {
          "baskin_robbins": [
            {
              "text": "Now you've more choice on Pink Day! Get the new Pink Day pro" +
                  "motion today by showing us any pink item! ",
              "label": "promo"
            }, {
              "text": "Now you've more choice on Pink Day! Get the new Pink Day pro" +
                  "motion today by showing us any pink item! ",
              "label": "promo"
            }
          ],
          "ben_and_jerrys": [
            {
              "text": "Free Cone Day is coming April 4th! So close you can almost t" +
                  "aste the FREE ice cream. How far would you go for free ice c" +
                  "ream? Tell us in the comments!",
              "label": "promo"
            }, {
              "text": "*NEW* It's vanilla, but not as you know it. Immerse yourself" +
                  " in the caramel-gooeyness and delicious swirls of fudge in o" +
                  "ur Vanilla Caramel Fudge. Try our new flavour and keep your " +
                  "favourites happy with our Buy 2 Get 1 Free* offer. Available" +
                  " in Fairprice, Sheng Siong and Cheers only. *Promo period: 2" +
                  " – 15 Mar. Excludes Ben & Jerry’s Core range.",
              "label": "promo"
            }, {
              "text": "Brownie Batter Cake Core packs chocolate and vanilla ice cre" +
                  "ams around a lip-smacking heart of brownie batter. Grab your" +
                  "s in store or head to our website at; http://goo.gl/NKkYqR t" +
                  "o tell us why you want to #CeleBakeSG at your office or scho" +
                  "ol! ",
              "label": "not-promo"
            }, {
              "text": "Head over to our website to check out our recipes for the ne" +
                  "w Cake Core Ice Creams created by Ng Li Tying! Brownie Core " +
                  "Tiramisu Trifle and Cookies & Cream Cheesecake Cream Pie are" +
                  " tasty treats ready for the spooning!",
              "label": "not-promo"
            }, {
              "text": "How do you want to Cele-bake with our new Brownie Batter Cor" +
                  "e and Cookies & Cream Cheesecake Core? Tell us how and we mi" +
                  "ght just bring #CeleBakeSG and free ice cream to you! http:/" +
                  "/goo.gl/NKkYqR",
              "label": "not-promo"
            }, {
              "text": "COE you don’t have to pay for. Head down to Ben & Jerry’s Sc" +
                  "oop Shops on 12 April and celebrate Free Cone Day with us fr" +
                  "om 12-8pm! Click here for details goo.gl/7HgP2d. #FCDSG",
              "label": "promo"
            }
          ],
          "cold_stone": [
            {
              "text": "Happy 10th Anniversary @vivocitysingapore! To celebrate this" +
                  " special occasion, #ColdStoneSG is offering 2 x Like It Sign" +
                  "ature Creation at only $10! Available for 10 days till 27 No" +
                  "v at VivoCity only",
              "label": "promo"
            }, {
              "text": "Indulge in our Signature Creation thick waffle set and shake" +
                  " it up with a choice of your Shake at only $16! Available at" +
                  " #ColdStoneSG Orchard Central, HillV2 and GreenwichV till 25" +
                  " Dec 🎄",
              "label": "promo"
            }, {
              "text": "Celebrate the season of giving with #ColdStoneSG 1 for 1 Lov" +
                  "e It Signature Creation. Available till 25 Dec at Far East S" +
                  "quare outlet only!",
              "label": "promo"
            }, {
              "text": "Pre-order for our Jolly Holly Log Cake is now opened at $49/" +
                  "$85 | Pay with your UOB card and receive 20% off - valid til" +
                  "l 14 Nov. Ring us up or email us at sales@coldstonecreamery." +
                  "com.sg to make your order now! #cscsg #coldstonesg",
              "label": "promo"
            }, {
              "text": "No tricks, just treats at Cold Stone Creamery. Graveyard is " +
                  "a deadly combination of Sweet Cream ice cream mixed with Ras" +
                  "pberries, Gummy Worms and Brains, and topped with OREO crumb" +
                  "s. Try it with our seasonal Blood Red Velvet Waffles at only" +
                  " $13 nett! Available from tomorrow onwards!",
              "label": "promo"
            }, {
              "text": "These cuties from STORKS movie are at Cold Stone VivoCity al" +
                  "l the way till 12pm! Come say hello 👋🏻 #STORKSxCSC #Coldst" +
                  "onesg #cscsg ",
              "label": "not-promo"
            }, {
              "text": "UOB 1 for 1 Gotta Have It Signature Creation is back! Make h" +
                  "aste before it ends on 31 October! #cscsg #coldstonesg Valid" +
                  " for UOB card holders only, not applicable on eve of and pub" +
                  "lic holiday.",
              "label": "promo"
            }, {
              "text": "This just in - Red Velvet Waffle with a scoop of Birthday Ca" +
                  "ke Remix at only $9.80! For a limited time only, till 14 Aug" +
                  "ust 2016 at our VivoCity, Orchard Central and HillV2 outlets" +
                  "! #cscsg #coldstonesg ",
              "label": "promo"
            }
          ]
        }
      }
    }
  }
}
