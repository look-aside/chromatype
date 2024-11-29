//file where I store the bulky info 

//QUESTIONS
const questions = [
    "R","I love to surround myself with family, whether chosen or biological.",
    "G","I am not interested in personal drama.",
    "R","I am always seeking new connections.",
    "Y","I have come to terms with hardship and choose to remain upbeat.",
    "O","I value socializing, but I make time for myself.",
    "R","I feel most myself around others.",
    "O","I have been called driven and self-motivated.",
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
    "Br","I'm scared of getting hurt.",
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
    "O","My career is important, but it's not everything.",
    "B","It's important to let yourself feel your emotions fully.",
    "B","I have a deep need for alone time.",
    "P","I make others laugh a lot.",
    "P","It wouldn't be out of the ordinary for me to learn how to unicycle.",
    "Br","I get along with others easily.",
    "Y","I have been called an optimist.",
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
    "Light Orange", "True Orange", "Dark orange",
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
redInfo = "REDS are deeply <i>people-oriented</i>. They are always making plans, seeking quality time with friends and family, and making an effort to meet new people. <br><br>They might be a children's entertainer, a community organizer, a DJ, or a religious leader. Reds want to make a difference in many peoples' lives.";
orangeInfo = "ORANGES are the most well-rounded color family. As the true warm color family, they have a balanced and extroverted personality that lets them connect meaningfully with others while maintaining a thriving personal life. <br><br>Oranges are always developing new skills and taking on new hobbies. They are inspired by genuine curiosity for the world around them and they love to learn. They may be writers, podcast hosts, wedding photographers, or astronauts. They will inspire others with their open hearts and mature minds.";
yellowInfo = "YELLOWS are the most joyful color family. Known for being bubbly and optimistic, they're not one-dimensional and have a more analytical side as well. They will always have a kind word for a friend and a smile for a stranger. <br><br>Yellows often have a rich personal history; many people may not understand the journey it took for them to get to where they are today. Yellows might be cartoonists, restaurant hosts, motivational speakers, or dance instructors.";
greenInfo = "GREENS are a peaceful color type that bridge the gap between cool and warm. With the contentedness of yellows and the emotional intelligence of blues, greens may seem to have it all; they do, however, struggle with compromising their understated nature with the busyness of modern life. <br><br>Greens might be yoga instructors, baristas, homemakers, carpenters, or farmers.";
blueInfo = "BLUES are the most emotionally intelligent color family. As the true cool family, they need plenty of time alone and they highly value the power of introspection. <br><br>Blues may be therapists, stay-at-home parents, musicians, museum curators, or park rangers. Although it may take them a while to form bonds, they are a valuable presence in others' lives.";
purpleInfo = "PURPLES are the most unusual color family. Purples hold a true whimsy and curiosity for the world that isn't present in most adults. While buttoned-up types may find Purples to be childish or unserious, Purples can bring delight to those who are open-minded enough to appreciate their quirks. <br><br>They may be comedy writers, trapeze artists, explorers, filmmakers, or multihyphenates. They get along well with most light and warm types but may form the deepest connections with discerning cool types. ";
outlierInfo = "OUTLIERS are the rarest color family. You are defined by an unconventional outlook on the world and on others. While white and black types might seem like opposites, they have a strong kinship and may be the definition of opposites attract. These types are true mavericks: they may end up as revolutionaries, trendsetters, hermits, world leaders, inventors, or criminals. <br><br>Outliers have unique connections with others; it is very difficult to predict who they will like or dislike. They have the potential for great good and great harm. Make your decisions thoughtfully and leverage your skills with grace.";

function getFamilyInfo(color){
    if (color == "Red") return redInfo;
    else if (color == "Orange") return orangeInfo;
    else if (color == "Yellow") return yellowInfo;
    else if (color == "Green") return greenInfo;
    else if (color == "Blue") return blueInfo;
    else if (color == "Purple") return purpleInfo;
    else if (color == "White" || color == "Black") return outlierInfo;
}

function getTypeInfo(color){
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