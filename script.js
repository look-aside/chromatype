//get references to html elements
questionText = document.getElementById("question-text");
questionLabel = document.getElementById("question-label");
prevBtn = document.getElementById("prev-button");
nextBtn = document.getElementById("next-button");
playBtn = document.getElementById("play-button");
retakeBtn = document.getElementById("retake-button");
homeBtn = document.getElementById("home-button");
famBtn = document.getElementById("family-button");
typeBtn = document.getElementById("type-button");
undertoneBtn = document.getElementById("undertone-button");
results1Btn = document.getElementById("results1-button");
results2Btn = document.getElementById("results2-button");
results3Btn = document.getElementById("results3-button");

slider = document.getElementById("slider");

quizDiv = document.getElementById("quiz");
resultsDiv = document.getElementById("results");
homeDiv = document.getElementById("home");
famDiv = document.getElementById("family-info");
typeDiv = document.getElementById("type-info");
undertoneDiv = document.getElementById("undertone-info");

//progress vars
questionNumber = 1;
totalQuestions = 42;
totalBrQuestions = 6; //REMEMBER TO UPDATE THIS

//results tracking
const answerValues = Array(totalQuestions).fill(0); //the answer (1-100) of each question
const colorNamesIndex = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var colorValues = [0,0,0,0,0,0]; //r, o, y, g, b, p, brightness
var brightness = 0;

WHITE_THRESHOLD = 70; //all colors avg is above this to be white
BLACK_THRESHOLD = 50; //on average, disagreed with all questions

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
    "#e9f662", //l green
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

//update the question number label
function updateLabel(){
    questionLabel.innerHTML = "Question " + questionNumber + "/" + totalQuestions;
}

//get the current question text from the list
function updateQuestion(){
    questionText.innerHTML = questions[(questionNumber-1)*2 + 1];
}

//set up the quiz from question 1
function startQuiz(){  
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    quizDiv.style.display = 'block';

    questionNumber = 1;
    colorValues = [0,0,0,0,0,0];
    updateLabel();
    updateQuestion();

    //grey out the prev button
    prevBtn.disabled = true;
}

function homePage(){
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'block';
    quizDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'none';
}

function famResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'block';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'none';
}

function typeResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'block';
    undertoneDiv.style.display = 'none';
}

function undertoneResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'block';
}

//take in the data and go to the next question
function nextQuestion(){
    if (questionNumber == totalQuestions) {
        answerValues[questionNumber-1] = slider.value;
        showResults();
    }
    else{
        //take data
        answerValues[questionNumber-1] = slider.value;
        //next question
        questionNumber ++;
        updateLabel();
        updateQuestion();

        //set slider to whatever the answer was
        slider.value = 50;

        //show the prev button
        prevBtn.disabled = false;
        //if last question: replace Next button with Results button
        if (questionNumber == totalQuestions) nextBtn.innerHTML = "Results";
    }
}

//go back
function prevQuestion(){
    questionNumber --;
    updateLabel();
    updateQuestion();
    //set to prev. answer
    slider.value = answerValues[questionNumber-1];
    nextBtn.innerHTML = "Next";
    if (questionNumber == 1) prevBtn.disabled = true;
}

function showResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'none';

    //calculate the color points
    for (i = 0; i < totalQuestions; i ++){
        thisAnswer = answerValues[i];
        thisColor = questions[i*2]; //find which color the Q corresponded to
        if (thisColor == "R") colorValues[0] += parseInt(thisAnswer);
        if (thisColor == "O") colorValues[1] += parseInt(thisAnswer);
        if (thisColor == "Y") colorValues[2] += parseInt(thisAnswer);
        if (thisColor == "G") colorValues[3] += parseInt(thisAnswer);
        if (thisColor == "B") colorValues[4] += parseInt(thisAnswer);
        if (thisColor == "P") colorValues[5] += parseInt(thisAnswer);
        if (thisColor == "Br") brightness += parseInt(thisAnswer);
    }

    var isBlack = true;
    var isWhite = true;

    //check if all color values are above or below threshold
    for (i = 0; i < 6; i ++){
        avg = colorValues[i]/6; //the average response to this color questions
        if (avg < WHITE_THRESHOLD) isWhite = false;
        if (avg > BLACK_THRESHOLD) isBlack = false;
    }

    OVERTONE = "";
    OVERTONE_MODIFIER = "";
    UNDERTONE = "";

    if (isBlack || isWhite){
        if (isBlack) OVERTONE = "Black";
        else OVERTONE = "White";
        //undertone is what normally would be the overtone: max individual value
        let maxVal = Math.max(...colorValues);
        let maxIndex = colorValues.indexOf(maxVal);
        UNDERTONE = colorNamesIndex[maxIndex];
    }

    else{
        //calculate the overtone and undertone
        let maxVal = Math.max(...colorValues);
        let maxIndex = colorValues.indexOf(maxVal);
        OVERTONE = colorNamesIndex[maxIndex];
        brightnessPercent = (brightness/totalBrQuestions);

        if (brightnessPercent <= 40) OVERTONE_MODIFIER = "Dark";
        else if (brightnessPercent <= 60) OVERTONE_MODIFIER = "True";
        else OVERTONE_MODIFIER = "Light";
        
        //then undertone - calculate second-most max
        colorValues[maxIndex] = 0; //zero out the max (overtone)
        let secondMaxVal = Math.max(...colorValues);
        let secondMaxIndex = colorValues.indexOf(secondMaxVal);
        UNDERTONE = colorNamesIndex[secondMaxIndex];
    }

    //for testing!
    OVERTONE = "White";
    OVERTONE_MODIFIER = "";
    UNDERTONE = "Orange";

    //populate results page:
    //overtone and undertone labels
    document.getElementById("overtone-text").innerHTML = 
    "Your Overtone is <b>" + OVERTONE_MODIFIER + " " + OVERTONE + "</b>.";  
    document.getElementById("undertone-text").innerHTML = 
    "Your Undertone is <b>" + UNDERTONE + "</b>.";    

    //circle colors 
    document.getElementById("overtone-circle").style.backgroundColor = getHex(OVERTONE_MODIFIER + " " + OVERTONE);
    if (OVERTONE == "White") document.getElementById("overtone-circle").style.border = "1px solid #ddd";
    document.getElementById("undertone-circle").style.backgroundColor = getHex("True " + UNDERTONE);

    //recap text (you are: adjective, adjective, adjective)
    document.getElementById("recap-text").innerHTML = "<b>You are: " + "<i>" + 
    getAdjectiveType(OVERTONE_MODIFIER + " " + OVERTONE) + ", " +
    getAdjectiveFamily(OVERTONE) + ", " + getAdjectiveFamily(UNDERTONE) + "</i></b>";
}

//for the recap text
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

//given the name of the color, return the hex code
function getHex(colorName){
    if (colorName == " White") return "#ffffff";
    if (colorName == " Black") return "#000000";
    hexIndex = hexCodeNames.indexOf(colorName);
    return hexCodes[hexIndex];
}

nextBtn.onclick = function(){ nextQuestion();};
prevBtn.onclick = function(){ prevQuestion();};
playBtn.onclick = function(){ startQuiz();};
retakeBtn.onclick = function(){ startQuiz();};
homeBtn.onclick = function(){ homePage();};
famBtn.onclick = function(){ famResults(); };
typeBtn.onclick = function(){ typeResults(); };
undertoneBtn.onclick = function(){ undertoneResults(); };
results1Btn.onclick = function(){ showResults();};
results2Btn.onclick = function(){ showResults();};
results3Btn.onclick = function(){ showResults();};

//main
homePage();
showResults();