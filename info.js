//file where I store the bulky info 

//QUESTIONS
const questions = [
    "R","I love to surround myself with family, whether chosen or biological.",
    "R","I am always seeking new connections.",
    "Y","I have come to terms with hardship and choose to remain upbeat.",
    "O","I value socializing, but I make time for myself.",
    "R","I feel most myself around others.",
    "O","I consider myself driven and self-motivated.",
    "G","I hate to be involved in personal drama.",
    "B","I want to understand how other people feel and think.",
    "P","I don't take being called weird as an insult.",
    "Y","I want to make other people happy.",
    "Br","Sometimes, ignorance can be bliss.",
    "B","I love to dissect my own inner world.",
    "O","I care about self-improvement.",
    "P","My brain works differently from most people's.",
    "P","I am always embarking on a new creative project.",
    "Y","I value being kind to everyone.",
    "B","I have a strong sense of morals and values.",
    "R","I am a hopeless romantic.",
    "Y","There is a light at the end of the tunnel.",
    "Y","I focus on the beauty of the small things.",
    "G","I stay calm when dealing with conflict.",
    "R","I love to meet people.",
    "Br","I can be held back by fear of getting hurt.",
    "R","The most important part of my life is my loved ones.",
    "O","I am often described as well-rounded.",
    "B","It is essential to take your time with decisions.",
    "G","Spending time in nature recharges me.",
    "P","There's nothing wrong with standing out in a crowd.",
    "G","I like to work with my hands.",
    "Br","I trust that most people are fundamentally good.",
    "G","I am happy with a small circle of close friends.",
    "O","I never want to stop learning.",
    "Br","I avoid difficult or painful topics.",
    "G","I feel at peace in life.",
    "O","I place a lot of value on my career and accomplishments.",
    "B","It's important to let yourself feel your emotions fully.",
    "B","I have a deep need for alone time.",
    "P","I make others laugh a lot.",
    "P","It wouldn't be out of the ordinary for me to learn how to unicycle.",
    "Br","I get along with others easily.",
    "Y","I consider myself an optimist.",
    "Br","People are drawn to me."
];

//COLORS
const hexCodes = [
    "#f6b1bc", //light red
    "#f04343", //true red
    "#a61711", //dark red
    "#fbaf6d", //l orange
    "#ee731b", //t orange
    "#bb560e", //d orange
    "#ffdc73", //l yellow
    "#fab60e", //t yellow
    "#cf7f0c", //d yellow
    "#b8f770", //l green
    "#73dd1e", //t green
    "#1a990a", //d green
    "#b0e6f3", //l blue
    "#55ade7", //t blue
    "#2f63c3", //d blue
    "#cfa0f1", //l purple
    "#a44ee3", //t purple
    "#55239e"  //d purple
]
const hexCodeNames = [
    "Light Red", "True Red", "Dark Red",
    "Light Orange", "True Orange", "Dark Orange",
    "Light Yellow", "True Yellow", "Dark Yellow",
    "Light Green", "True Green", "Dark Green",
    "Light Blue", "True Blue", "Dark Blue",
    "Light Purple", "True Purple", "Dark Purple"
]

//RESULTS INFO
//adjectives
function getAdjectiveType(color){
    //red
    if (color == "Light Red") return "social";
    else if (color == "True Red") return "loving";
    else if (color == "Dark Red") return "passionate";
    //orange
    else if (color == "Light Orange") return "intelligent";
    else if (color == "True Orange") return "well-rounded";
    else if (color == "Dark Orange") return "successful";
    //yellow
    else if (color == "Light Yellow") return "optimistic";
    else if (color == "True Yellow") return "kind";
    else if (color == "Dark Yellow") return "humanist";
    //green
    else if (color == "Light Green") return "calm";
    else if (color == "True Green") return "collected";
    else if (color == "Dark Green") return "serene";
    //blue
    else if (color == "Light Blue") return "trustworthy";
    else if (color == "True Blue") return "empathetic";
    else if (color == "Dark Blue") return "layered";
    //purple
    else if (color == "Light Purple") return "silly";
    else if (color == "True Purple") return "whimsical";
    else if (color == "Dark Purple") return "mythical";
    //outliers - remember to add the space in beginning
    else if (color == " White") return "chameleon";
    else if (color == " Black") return "pragmatist";
}
function getAdjectiveFamily(color){
    if (color == "Red") return "warm";
    else if (color == "Orange") return "curious";
    else if (color == "Yellow") return "joyful";
    else if (color == "Green") return "peaceful";
    else if (color == "Blue") return "introspective";
    else if (color == "Purple") return "creative";
    else if (color == "White" || color == "Black") return "nonconformist";
}

//FAMILY/TYPE INFO
redInfo = "Reds are deeply <i>people-oriented</i>. They are always making plans, seeking quality time with friends and family, and making an effort to meet new people. With a warm, welcoming presence, reds will not have trouble making connections.<br><br>You might find reds working as a children's entertainer, a community organizer, a DJ, or a religious leader. They will always make a big impact on others' lives.";
orangeInfo = "Oranges are the most <i>well-rounded</i> color family. As the true warm color family, they have a balanced and extroverted personality that lets them connect meaningfully with others while maintaining a thriving personal life. Oranges are always developing new skills and taking on new hobbies. They are inspired by genuine curiosity for the world around them and they love to learn. <br><br>Oranges may be writers, podcast hosts, wedding photographers, or astronauts. They will inspire others with their open hearts and mature minds.";
yellowInfo = "Yellows are the most <i>joyful</i> color family. Known for being bubbly and optimistic, they're not one-dimensional and have a more analytical side as well. Yellows often have a rich personal history; many people may not understand the journey it took for them to get to where they are today. <br><br>Yellows might be cartoonists, restaurant hosts, motivational speakers, or dance instructors. They will always have a kind word for a friend and a smile for a stranger.";
greenInfo = "Greens are a <i>peaceful</i> color type that bridge the gap between cool and warm. With the contentedness of yellows and the emotional intelligence of blues, greens may seem to have it all; they do, however, struggle with compromising their understated nature with the busyness of modern life. <br><br>Greens might be yoga instructors, baristas, homemakers, carpenters, or farmers. They often will fulfill the role of peacekeepers in their personal or professional lives.";
blueInfo = "Blues are the most <i>emotionally intelligent</i> color family. As the true cool family, they need plenty of time alone and they highly value the power of introspection. They are cherished for their wisdom and unique ability to understand how people tick.<br><br>Blues may be therapists, stay-at-home parents, musicians, museum curators, or park rangers. Although it may take them a while to form bonds, they are a valuable presence in others' lives.";
purpleInfo = "Purples are the most <i>unusual</i> color family. Purples hold a true whimsy and curiosity for the world that isn't present in most adults. While buttoned-up types may find Purples to be childish or unserious, they delight those who are open-minded enough to appreciate their quirks.<br><br>Purples may be comedy writers, trapeze artists, explorers, filmmakers, or multihyphenates with too many professions to list. They will contribute great amounts to arts and culture— if they choose to share their gifts with the world."; 
outlierInfo = "Outliers are the <i>rarest</i> color family. The Outlier family includes only the white and black types, which may sound like opposites but are united by an unconventional outlook on the world and a cutting intelligence.<br><br>These types are true mavericks: they may end up as revolutionaries, trendsetters, hermits, world leaders, inventors, or criminals. They have the potential for great good and great harm.";

function getFamilyInfo(color){
    if (color == "Red") return redInfo;
    else if (color == "Orange") return orangeInfo;
    else if (color == "Yellow") return yellowInfo;
    else if (color == "Green") return greenInfo;
    else if (color == "Blue") return blueInfo;
    else if (color == "Purple") return purpleInfo;
    else if (color == "White" || color == "Black") return outlierInfo;
}

//TYPE writeups
//reds
lightRedInfo =  "You are constantly seeking out new connections and new places. You might have a penchant for romantic connections, and you value living through as many unique experiences as possible. Light Red is a relatively controversial color type: cool and dark types may think you are shallow or flighty. But many people, especially light and warm types, will find you energizing. Unlike many types, you will get along well with others of your type." +
"<br><br><ul><li><b>Best matches:</b> light yellow, light red, true red.</li>" + 
"<li><b>Most conflict:</b> dark blue, black, dark green.</li>" + 
"<li><b>Notes of:</b> cherry blossom, watermelon, cotton candy.</li></ul>";
trueRedInfo = "You're a caring, loving person who has room in your heart for many people. You have a wide circle of casual friends and acquaintances who you value, but those in your inner circle are deeply important to you. You are one of the most universally compatible color types, and you enjoy spending time with those who are quite different from you." +
"<br><br><ul><li><b>Best matches:</b> true green, dark red, white</li>" + 
"<li><b>Most conflict:</b> black, true orange, light red</li>" + 
"<li><b>Notes of:</b> strawberry, red wine, cranberry</li></ul>";
darkRedInfo = " A passionate, feeling person, you will be part of many love affairs, deep friendships, and even fraught rivalries. You can gain a lot of happiness from others, but may struggle with letting yourself find fulfillment alone. You may find light color types to be frustratingly casual or low-commitment, and you may get along exceptionally with other dark types." +
"<br><br><ul><li><b>Best matches:</b> dark blue, dark green, dark purple</li>" + 
"<li><b>Most conflict:</b> light red, light yellow, light green</li>" + 
"<li><b>Notes of:</b> velvet, blood orange, chili pepper</li></ul>";

//oranges
lightOrangeInfo = "You're all about growing as a person. You have a balanced sensibility and a strong sense of what's most important to you. You always know what's next on the to-do list, and what steps to take to make it happen, but you're also able to cut loose and prioritize rest when you need it." +
"<br><br><ul><li><b>Best matches:</b>  all oranges, all greens, light purples</li>" + 
"<li><b>Most conflict:</b> dark red, dark purple, black</li>" + 
"<li><b>Notes of:</b> creamsicle, tulip, coral</li></ul>";
trueOrangeInfo = "Charismatic and grounded, you know who you are and what you want— and how to get it. You're able to focus on yourself and your own growth while also uplifting your network of loved ones. Your balanced, mature sensibility will come in handy everywhere, whether it's the office, the kitchen table, or the bar." +
"<br><br><ul><li><b>Best matches:</b> true orange, true red, true yellow</li>" + 
"<li><b>Most conflict:</b> black, white, dark blue</li>" + 
"<li><b>Notes of:</b> tangerine, chrysanthemum, sandstone</li></ul>";
darkOrangeInfo = "Without you, there's a good chance your community, workplace, or family would fall apart. You're a solid pillar holding up those around you, and you might be the only person cut out for the task. With your sizable toolkit of skills and experiences, you can accomplish a lot. But remember to make time for yourself!" +
"<br><br><ul><li><b>Best matches:</b> true green, true red, true blue</li>" + 
"<li><b>Most conflict:</b> light colors, dark purple, black</li>" + 
"<li><b>Notes of:</b> copper, autumn leaves, amber</li></ul>";

//yello
lightYellowInfo = "With a bright disposition and a sunny smile, you bring light to any room you enter. You're well-liked and are able to form connections easily. You have a genuine desire to make the world a better place and you will pursue that goal in many ways, from volunteering to making friends to creating art." +
"<br><br><ul><li><b>Best matches:</b> light yellow, light red, true blue</li>" + 
"<li><b>Most conflict:</b> dark blue, dark green, black</li>" + 
"<li><b>Notes of:</b> lemonade, potato chip, rubber ducky</li></ul>";
trueYellowInfo = "A truly happy and sweet person, you bring light to those around you. You're not naive and are well aware of the struggles of life, but you know that the best response to hard times is care and kindness. You may anger those less empathetic than you with your selflessness and quiet optimism, but don't let them dim your light." +
"<br><br><ul><li><b>Best matches:</b> true red, all yellows, all greens</li>" + 
"<li><b>Most conflict:</b> dark blue, light blue, black</li>" + 
"<li><b>Notes of:</b> sunflower, lemon drop, pineapple</li></ul>";
darkYellowInfo = "The darkest shade of the happiest hue, you aren't a simple optimist. You have a grounded belief that there is a tremendous amount of good and beauty in the world, and you're willing to do the hard work to protect it. You know that people can cause great harm, but you're a humanist who knows that love and community can save us." +
"<br><br><ul><li><b>Best matches:</b> black, dark green, true green </li>" + 
"<li><b>Most conflict:</b> light yellow, light blue, light red</li>" + 
"<li><b>Notes of:</b> gold bar, ochre, honeycomb</li></ul>";

//green
lightGreenInfo = "A contemplative spirit, you value time spent connecting with nature, long conversations with friends, and meaningful personal projects. Others are drawn to you because of your purpose and gentle drive. You may be an artisan, either literally or metaphorically. You likely have no or very few enemies and never worry yourself with gossip or drama." +
"<br><br><ul><li><b>Best matches:</b> light blue, true green, true blue</li>" + 
"<li><b>Most conflict:</b> true red, dark red, white</li>" + 
"<li><b>Notes of:</b> chlorophyll, lime zest, cucumber</li></ul>";
trueGreenInfo = "Perhaps the most peaceful color type, you're a calming presence that many find quietly alluring. You are able to have meaningful conversations with a wide variety of types, which allows you to make friends in all sorts of places— although, as a more reserved type, you might prefer to keep a small circle." +
"<br><br><ul><li><b>Best matches:</b> white, light green, light yellow</li>" + 
"<li><b>Most conflict:</b> true red, light orange, dark orange</li>" + 
"<li><b>Notes of:</b> clover, green apple, peppermint</li></ul>";
darkGreenInfo = "Perhaps the most introverted color type, dark greens know what's important in life. Easily overwhelmed, you value solitude over nearly anything else, but you let a few people get close to you and will defend them with fierce loyalty. You may form some of your strongest important bonds with animals or your favorite places in nature." +
"<br><br><ul><li><b>Best matches:</b> light green, light blue, true green</li>" + 
"<li><b>Most conflict:</b> light red, light yellow, true yellow</li>" + 
"<li><b>Notes of:</b> fir tree, jade, sea glass</li></ul>";

//blue
lightBlueInfo = "Quick with a wise word or a piece of advice, you're a trusted friend who people seek out. Others may remark on your maturity, especially if you are young: you have likely been called an old soul in your day. Be careful to extend your sensibilities to yourself, though; light blues may excel at giving advice to others but struggle with applying it to their own lives." +
"<br><br><ul><li><b>Best matches:</b> light green, true green, true red</li>" + 
"<li><b>Most conflict:</b> white, dark purple, dark yellow</li>" + 
"<li><b>Notes of:</b> robin's egg, seafoam, hydrangea</li></ul>";
trueBlueInfo = "You're marked by an exceptional emotional intelligence that has led you to take on many responsibilities. True blues are highly trustworthy, and as a result, you may have many people flock to you for counsel. Be careful not to take on too much. True blues often assume caretaker roles." +
"<br><br><ul><li><b>Best matches:</b> true purple, true green, black</li>" + 
"<li><b>Most conflict:</b> light orange, true yellow, dark green</li>" + 
"<li><b>Notes of:</b> bluebird, ocean water, lapis lazuli</li></ul>";
darkBlueInfo = "You hold a deep wisdom forged by hardship and struggle. A reserved, introverted color type, it may take others some time to get to know you well. Once they do, they often form very strong bonds with you because of your rich life experience and quiet kindness." +
"<br><br><ul><li><b>Best matches:</b> true blue, light blue, true green</li>" + 
"<li><b>Most conflict:</b> true red, light red, true yellow</li>" + 
"<li><b>Notes of:</b> sapphire, blueberry, night sky</li></ul>";

//purple
lightPurpleInfo = "Light purples stand out. You might be a local folk hero or an online sensation. While you have a circle of close friends who know the real you, you're also one of the most popular color types because of your entertaining personality. Light purples can be some of the funniest and most creative people around; however, you may struggle with feeling like a persona and worrying that people don't truly know you." +
"<br><br><ul><li><b>Best matches:</b> true purple, all greens, true blue</li>" + 
"<li><b>Most conflict:</b> true yellow, light yellow, dark red</li>" + 
"<li><b>Notes of:</b> lilac, ube, lavender</li></ul>";
truePurpleInfo = "You have likely never felt normal. You are often highly talented but may struggle with fitting in. You are intelligent, often in untraditional ways, and capable of creative achievements many could never even dream of. True purples are aware of their differences and, if they choose to embrace them, often become legendary artists and creatives." +
"<br><br><ul><li><b>Best matches:</b> black, dark purple, light blue</li>" + 
"<li><b>Most conflict:</b> dark red, light red, light yellow</li>" + 
"<li><b>Notes of:</b> fig, grape soda, purple cabbage</li></ul>";
darkPurpleInfo = "Dark purples are true individualists who live fully off the beaten path. You may have a wild fashion sense, exotic pets, or life experiences that could make a bestselling movie. You're a bit of a hidden gem amongst their social circle: friends exchange anecdotes they learn about you and excitedly introduce you as one of the most interesting people they know. Dark purples have no desire for showiness: you are always authentic." +
"<br><br><ul><li><b>Best matches:</b> white, true green, true red</li>" + 
"<li><b>Most conflict:</b> light blue, true orange, black</li>" + 
"<li><b>Notes of:</b> amethyst, eggplant, plum</li></ul>";

//outliers
whiteInfo = "A thoroughly multi-faceted person, you will evoke a wide array of responses from others: much like a white-colored surface, you reflect other's personalities back at them. You are able to fit into nearly any situation and have many skills. You form meaningful connections with mature, grounded types such as cool darks and true tones. You will quickly notice two-faced or manipulative behavior in people, often far before others do." +
"<br><br><ul><li><b>Best matches:</b> true green, dark purple, black</li>" + 
"<li><b>Most conflict:</b> dark yellow, light blue, black</li>" + 
"<li><b>Notes of:</b> fog, blank paper, frosted glass</li></ul>";

blackInfo = "You are a pragmatist with an intensely realistic, utilitarian sensibility. Black color types, defined by the <i>absence</i> of color, often harbor very few material desires or surface-level thoughts. These types are able to have a focused mind and see the deepest truths in people. This makes black one of the most controversial color types: people may feel disconcerted by their lack of pleasantries and their ability to see right through others." +
"<br><br><ul><li><b>Best matches:</b> white, black, true purple</li>" + 
"<li><b>Most conflict:</b> light red, light yellow, light blue</li>" + 
"<li><b>Notes of:</b> charcoal, obsidian, squid ink</li></ul>";

//for copying and pasting
template = "" +
"<br><br><ul><li><b>Best matches:</b> </li>" + 
"<li><b>Most conflict:</b> </li>" + 
"<li><b>Notes of:</b> </li></ul>";


function getTypeInfo(color){
    //red
    if (color == "Light Red") return lightRedInfo;
    else if (color == "True Red") return trueRedInfo;
    else if (color == "Dark Red") return darkRedInfo;
    //orange
    else if (color == "Light Orange") return lightOrangeInfo;
    else if (color == "True Orange") return trueOrangeInfo;
    else if (color == "Dark Orange") return darkOrangeInfo;
    //yellow
    else if (color == "Light Yellow") return lightYellowInfo;
    else if (color == "True Yellow") return trueYellowInfo;
    else if (color == "Dark Yellow") return darkYellowInfo;
    //green
    else if (color == "Light Green") return lightGreenInfo;
    else if (color == "True Green") return trueGreenInfo;
    else if (color == "Dark Green") return darkGreenInfo;
    //blue
    else if (color == "Light Blue") return lightBlueInfo;
    else if (color == "True Blue") return trueBlueInfo;
    else if (color == "Dark Blue") return darkBlueInfo;
    //purple
    else if (color == "Light Purple") return lightPurpleInfo;
    else if (color == "True Purple") return truePurpleInfo;
    else if (color == "Dark Purple") return darkPurpleInfo;
    //outliers - remember to add the space in beginning
    else if (color == " White") return whiteInfo;
    else if (color == " Black") return blackInfo;
}