
//master const object

//Need an object for each category
//Within each category object, need:
    //categoryName
    //categoryId
    //questions
    //correct answer
    //all potential answers

//APPENDING A GAMEBOARD COLUMN AS ITS OWN DIV

//Loop (through an object containing these)

const category = function(name, id, q1, a1, q2, a2, q3, a3, q4, a4, q5, a5) {
this.categoryName = name;
this.categoryId = id;
this.question1 = q1;
this.answer1 = a1;
this.question2 = q2;
this.answer2 = a2;
this.question3 = q3;
this.answer3 = a3;
this.question4 = q4;
this.answer4 = a4;
this.question5 = q5;
this.answer5 = a5;
}

var unitedStatesHistory = new category(
    "United States History", //category name
    "us_history", // category Id
    "First African American President of the United States", // question 1
    "Who is Barrack Obama?", // answer 1
    "Year the United States gained its independence from the British Empire", // question 2
    "1776", // answer 2
    "Treaty that ended the Revolutionary War", // question 3
    "Treaty of Paris", // answer 3
    "President during the 19th and 20th century", // question 4
    "Who was William McKinley?", // answer 4
    "This was the last US Navy ship sunk as a result of WW2", // question 5
    "What was the USS Bullhead?" // answer 5
    );

    
//Append a div with Category Name
    //Append a 100 point div
        //Clicking on this div appends 100 point question to answer_board
    //Append a 200 point div
        //Clicking on this div appends 200 point question to answer_board
    //Append a 300 point div
        //Clicking on this div appends 300 point question to answer_board
    //Append a 400 point div
        //Clicking on this div appends 400 point question to answer_board
    //Append a 500 point div
        //Clicking on this div appends 500 point question to answer_board

var displayColumn= function(categoryName, categoryId) {
    var pointsWorth = 100;
    for(var i = 0; i < 6; i++){
        if(i === 0) {
            $('#column1').append('<div class="category"> '+ categoryName + '</div><br>');
        } else {
            $('#column1').append('<button class="game_block" id="' + categoryId + '-' + i + '" onclick="showQuestion()">'+ pointsWorth + '</button><br>');
            pointsWorth +=100;
        }
    }
}

displayColumn(unitedStatesHistory.categoryName, unitedStatesHistory.categoryId);

//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a game block 
//THEN makes question appear in footer
var question = "question";

var removeQuestion = function() {
   $('#question_board').remove(question);

}

var showQuestion = function() {
    removeQuestion();
   $('#question_board').append(question);

}



//SUBMITTING CORRECT ANSWER
//GIVEN I am on the page for answering a question 
//WHEN I submit my answer 
//AND answer is correct 
//THEN Tells me answer is correct 
//AND adds to my score


//SUBMITTING INCORRECT ANSWER
//GIVEN I am on the page for answering a question 
//WHEN I submit my answer 
//AND answer is incorrect 
//THEN Tells me answer is incorrect 
//AND subtracts points from my score

