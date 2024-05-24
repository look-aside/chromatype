//get references to html elements
questionText = document.getElementById("question-text");
questionLabel = document.getElementById("question-label");
prevBtn = document.getElementById("prev-button");
nextBtn = document.getElementById("next-button");
slider = document.getElementById("slider");

//progress vars
questionNumber = 1;
totalQuestions = 7;
totalBrQuestions = 1; //REMEMBER TO UPDATE THIS

//results tracking
const answerValues = Array(totalQuestions).fill(0); //the answer (1-100) of each question
const colorValues = [0,0,0,0,0,0]; //r, o, y, g, b, p, brightness
const colorNamesIndex = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
var brightness = 0;

//QUESTIONS
const questions = [
    "R", "I hate to be alone.", 
    "O", "I am often described as well-rounded.", 
    "Y", "I am very rarely sad.", 
    "G", "I am drawn to the outdoors.", 
    "B", "I love to dissect my own inner world.",
    "P", "It wouldn't be out of the ordinary for me to learn how to unicycle.",
    "Br","I have an open mind."
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
    questionNumber = 1;
    updateLabel();
    updateQuestion();

    //grey out the prev button
    prevBtn.disabled = true;
}

//take in the data and go to the next question
function nextQuestion(){
    if (questionNumber == totalQuestions) {
        answerValues[questionNumber-1] = slider.value;
        tabulateResults();
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

function tabulateResults(){
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
    alert("max index: " + maxIndex);
    let maxColor = colorNamesIndex[maxIndex];
    alert("max color: " + maxColor);
    brightnessPercent = brightness/totalBrQuestions;
    alert("brightness percent: " + brightnessPercent);
    
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
    }

    alert("Overtone: " + OVERTONE);

    //switch display to results page
    
}

//MAIN
startQuiz();

nextBtn.onclick = function(){ nextQuestion();};
prevBtn.onclick = function(){ prevQuestion();};