
//master const object


//APPENDING A GAMEBOARD COLUMN AS ITS OWN DIV

//Loop (through an object containing these)
var categoryName = "Example Category Name";
var jeoColumn = [categoryName, 100, 200, 300, 400, 500];

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

    for(var i = 0; i < jeoColumn.length; i++){
        if(i === 0) {
            $('#column1').append('<div class="category"> '+ jeoColumn[i] + '</div><br>');
        } else {
            $('#column1').append('<button class="game_block"> '+ jeoColumn[i] + '</button><br>');
        }
    }

//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a question 
//THEN makes question appear in footer
//showQuestion: function() {

//}

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

