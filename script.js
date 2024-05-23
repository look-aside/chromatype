//get references to html elements
questionText = document.getElementById("question-text");
questionLabel = document.getElementById("question-label");
prevBtn = document.getElementById("prev-button");
nextBtn = document.getElementById("next-button");
slider = document.getElementById("slider");

//progress vars
questionNumber = 1;
totalQuestions = 7;

//results tracking
const answerValues = Array(totalQuestions).fill(0); //the answer (1-100) of each question
const colorValues = [0,0,0,0,0,0,0] //r, o, y, g, b, p, brightness

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
    if (questionNumber == totalQuestions) tabulateResults();
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
    //calculate the overtone and undertone
    
    //switch dislpay to results page
}

//MAIN
startQuiz();

nextBtn.onclick = function(){ nextQuestion(); };
prevBtn.onclick = function(){ prevQuestion(); };