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

WHITE_THRESHOLD = 67; //all colors avg is above this to be white
BLACK_THRESHOLD = 53; //on average, disagreed with all questions

OVERTONE = "";
OVERTONE_MODIFIER = "";
UNDERTONE = "";

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

    //reset variables
    questionNumber = 1;
    colorValues = [0,0,0,0,0,0];
    brightness = 0;
    
    updateLabel();
    updateQuestion();

    //grey out the prev button
    prevBtn.disabled = true;

    //undo the Results button back to Next
    nextBtn.innerHTML = "Next";
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
    //populate info
    family = OVERTONE;
    if (OVERTONE == "White" || OVERTONE == "Black") family = "Outliers"
    //display name of color family
    document.getElementById("color-family").innerHTML = "<b>" + family + "</b>";    
    //if not white or black, change text color accordingly
    if (OVERTONE_MODIFIER != "") document.getElementById("color-family").style.color = getHex("True " + OVERTONE);
    //populate paragraph
    document.getElementById("fam-info").innerHTML = getFamilyInfo(OVERTONE);   
}

function typeResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'block';
    undertoneDiv.style.display = 'none';
    
    //populate info
    document.getElementById("type-family").innerHTML = "<b>" + OVERTONE_MODIFIER + " " + OVERTONE + "</b>";    
    //if not white or black, change text color accordingly
    if (OVERTONE_MODIFIER != "") document.getElementById("type-family").style.color = getHex(OVERTONE_MODIFIER + " " + OVERTONE);
    //populate paragraph
    document.getElementById("type-info-text").innerHTML = getTypeInfo(OVERTONE_MODIFIER + " " + OVERTONE); 
}

function undertoneResults(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'none';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'block';
    //populate info
    document.getElementById("undertone-family").innerHTML = "<b>" + UNDERTONE + "</b>";    
    //if not white or black, change text color accordingly
    if (OVERTONE_MODIFIER != "") document.getElementById("undertone-family").style.color = getHex("True " + UNDERTONE);
    //populate paragraph
    document.getElementById("undertone-info-text").innerHTML = getFamilyInfo(UNDERTONE); 
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

    /*
    FOR DEBUGGING ALGORITHM
    
    alert("R: " + colorValues[0]/6 + 
        " O: " + colorValues[1]/6 +
        " Y: " + colorValues[2]/6 +
        " G: " + colorValues[3]/6 +
        " B: " + colorValues[4]/6 +
        " P: " + colorValues[5]/6 +
        " Br: " + brightness/totalBrQuestions);
    */
    var isBlack = true;
    var isWhite = true;

    //check if all color values are above or below threshold
    for (i = 0; i < 6; i ++){
        avg = colorValues[i]/6; //the average response to this color questions
        if (avg < WHITE_THRESHOLD) isWhite = false;
        if (avg > BLACK_THRESHOLD) isBlack = false;
    }

    if (isBlack || isWhite){
        if (isBlack) OVERTONE = "Black";
        else OVERTONE = "White";
        OVERTONE_MODIFIER = "";
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
    //OVERTONE_MODIFIER = "Dark";
    //OVERTONE = "Orange";
    //UNDERTONE = "Blue";

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

//Need to not re-calculate every time!!
function showResultsDontRecalculate(){
    //update display
    quizDiv.style.display = 'none';
    resultsDiv.style.display = 'block';
    homeDiv.style.display = 'none';
    famDiv.style.display = 'none';
    typeDiv.style.display = 'none';
    undertoneDiv.style.display = 'none';

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
results1Btn.onclick = function(){ showResultsDontRecalculate();};
results2Btn.onclick = function(){ showResultsDontRecalculate();};
results3Btn.onclick = function(){ showResultsDontRecalculate();};

//main
homePage();
//showResults();