//get references to html elements
questionText = document.getElementById("question-text");
questionLabel = document.getElementById("question-label");
prevBtn = document.getElementById("prev-button");
nextBtn = document.getElementById("next-button");
slider = document.getElementById("slider");

quizDiv = document.getElementById("quiz");
resultsDiv = document.getElementById("results");

//progress vars
questionNumber = 1;
totalQuestions = 42;
totalBrQuestions = 6; //REMEMBER TO UPDATE THIS

//results tracking
const answerValues = Array(totalQuestions).fill(0); //the answer (1-100) of each question
const colorNamesIndex = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var colorValues = [0,0,0,0,0,0]; //r, o, y, g, b, p, brightness
var brightness = 0;

//QUESTIONS
const questions = [
"R","I love to surround myself with family, whether chosen or biological.",
"R","I am a hopeless romantic.",
"R","I feel most myself around others.",
"R","I am always seeking new connections.",
"R","I love to meet people.",
"R","The most important part of my life is my loved ones.",
"O","I am often described as well-rounded.",
"O","I value socializing, but I make time for myself.",
"O","I care about self-improvement.",
"O","I never want to stop learning.",
"O","My career is important, but it's not everything.",
"O","I have been called driven and self-motivated.",
"Y","I want to make other people happy.",
"Y","I have been called an optimist.",
"Y","I have come to terms with hardship and choose to remain upbeat.",
"Y","I value being kind to everyone.",
"Y","There is a light at the end of the tunnel.",
"Y","I focus on the beauty of the small things.",
"G","I am not interested in personal drama.",
"G","I stay calm when dealing with conflict.",
"G","Spending time in nature recharges me.",
"G","I like to work with my hands.",
"G","I am happy with a small circle of close friends.",
"G","I am at peace when I am alone.",
"B","It's important to let yourself feel your emotions fully.",
"B","I love to dissect my own inner world.",
"B","It is essential to take your time with decisions.",
"B","I have been called emotionally intelligent.",
"B","I have a strong sense of morals and values.",
"B","I want to understand how other people feel and think.",
"P","My brain works differently from most people's.",
"P","I am always embarking on a new creative project.",
"P","I don't take being called weird as an insult.",
"P","I make others laugh a lot.",
"P","It wouldn't be out of the ordinary for me to learn how to unicycle.",
"P","There's nothing wrong with standing out in a crowd.",
"Br","I get along with others easily.",
"Br","People are drawn to me.",
"Br","Sometimes, ignorance can be bliss.",
"Br","I avoid difficult or painful topics.",
"Br","I trust that most people are fundamentally good.",
"Br","I'm scared of getting hurt."
];

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
    quizDiv.style.display = 'block';

    questionNumber = 1;
    colorValues = [0,0,0,0,0,0];
    updateLabel();
    updateQuestion();

    //grey out the prev button
    prevBtn.disabled = true;
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

    //calculate the overtone and undertone
    let maxVal = Math.max(...colorValues);
    let maxIndex = colorValues.indexOf(maxVal);
    let maxColor = colorNamesIndex[maxIndex];
    brightnessPercent = brightness/totalBrQuestions;
    
    //calculate overtone first
    OVERTONE = "";
    OVERTONE_MODIFIER = "";
    
    //outliers
    if (brightnessPercent < 15){
        OVERTONE = "Black";
    }
    if (brightnessPercent > 85){
        OVERTONE = "White";
    }

    //color
    if (OVERTONE == ""){
        OVERTONE = maxColor;
        if (brightnessPercent <= 40) OVERTONE_MODIFIER = "Dark";
        else if (brightnessPercent <= 60) OVERTONE_MODIFIER = "True";
        else OVERTONE_MODIFIER = "Light";
    }

    //then undertone
    //slightly lower threshold for white or black?

    //populate results page
    document.getElementById("overtone-text").innerHTML = 
    "Your Overtone is <b>" + OVERTONE_MODIFIER + " " + OVERTONE + "</b>.";   
}

//MAIN
startQuiz();

nextBtn.onclick = function(){ nextQuestion();};
prevBtn.onclick = function(){ prevQuestion();};