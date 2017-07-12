
//master const object


//APPENDING A GAMEBOARD COLUMN AS ITS OWN DIV

//Loop (through an object containing these)
var categoryName = "United States History";
var categoryId = "us_history";
var jeoColumn = [categoryName, 100, 200, 300, 400, 500];
/*var questionAndAnswer = {
    ["United States History",
    ["Year the United States gained its independence from the British Empire", "What is 1776?"],
    ["First African American President of the United States", "Who is Barrack Obama?"],
    ["Treaty that ended the Revolutionary War", "What is the Treaty of Paris?"],
    ["President during the 19th and 20th century", "Who was William McKinley?"],
    ["This was the last US Navy ship sunk as a result of WW2", "What was the USS Bullhead?"]
    ],
    ["United States History",
    ["Year the United States gained its independence from the British Empire", "What is 1776?"],
    ["First African American President of the United States", "Who is Barrack Obama?"],
    ["Treaty that ended the Revolutionary War", "What is the Treaty of Paris?"],
    ["President during the 19th and 20th century", "Who was William McKinley?"],
    ["This was the last US Navy ship sunk as a result of WW2", "What was the USS Bullhead?"]
    ]
};
*/

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
    for(var i = 0; i < jeoColumn.length; i++){
        if(i === 0) {
            $('#column1').append('<div class="category"> '+ categoryName + '</div><br>');
        } else {
            $('#column1').append('<button class="game_block" id="' + categoryId + '-' + i + '" onclick="showQuestion()">'+ pointsWorth + '</button><br>');
            pointsWorth +=100;
        }
    }
}

displayColumn('United States History', 'us_history');

//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a game block 
//THEN makes question appear in footer

var showQuestion = function() {
   $('#question_board').append("question");

}

var removeQuestion = function() {
   $('#question_board').remove("question");

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

