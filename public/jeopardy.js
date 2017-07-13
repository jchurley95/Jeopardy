/// Data & Core Business Logic ///

var questionArray = [
    {
        id: "11",
        q: "First African American President of the United States",
        a1: "Who is George Washington?",
        a2: "Who is Barrack Obama?",
        a3: "Who is Hillary Clinton?",
        a4: "Who is Danny Hurley?",
        ac: "a2"
    },
    {
        id: "12",
        q: "Year the United States gained its independence from the British Empire",
        a1: "Who is 1778?",
        a2: "What is 1776?",
        a3: "What is 1678?",
        a4: "What is 1872?",
        ac: "a2"
    },
    {
        id: "13",
        q: "Treaty that ended the Revolutionary War",
        a1: "What is the Treaty of Trent?",
        a2: "What is the Treaty of Florence?",
        a3: "What is the Treaty of Paris?",
        a4: "What is the Treaty of Versailles?",
        ac: "a3"
    },
    {
        id: "14",
        q: "President during the 19th and 20th century",
        a1: "Who is James K. Polk?",
        a2: "Who is Theodore Roosevelt?",
        a3: "Who is James Buchanan?",
        a4: "Who is William McKinley?",
        ac: "a4"
    },
    {
        id: "15",
        q: "This was the last US Navy ship sunk as a result of WW2",
        a1: "What is the USS Bullhead?",
        a2: "What is the USS Arizona?",
        a3: "What is the USS Louisitania?",
        a4: "What is the USS Missouri?",
        ac: "a1"
    },
    {
        id: "21",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: "22",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: "23",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: "24",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: "25",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: "31",
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    }
];


//Need an object for each category
//Within each category object, need:
    //categoryName
    //categoryId


const category = function(name, id) {
    this.categoryName = name;
    this.categoryId = id;
    };

var cat1 = new category(
    "United States History", //category name
    "c1", // category Id
    );

var cat2 = new category(
    "Music", //category name
    "c2" // category Id
    );

var cat3 = new category(
    "Capitals of Countries", //category name
    "c3" // category Id
    );

var cat4 = new category(
    "Danny's Favorite Things", //category name
    "c4" // category Id
    );

var cat5 = new category(
    "Danny's Least Favorite Things", //category name
    "c5" // category Id
    );

/// LOAD THE BOARD
window.onload = function(){
displayColumn(1, cat1.categoryName, cat1.categoryId);
displayColumn(2, cat2.categoryName, cat2.categoryId);
displayColumn(3, cat3.categoryName, cat3.categoryId);
displayColumn(4, cat4.categoryName, cat4.categoryId);
displayColumn(5, cat5.categoryName, cat5.categoryId);
}

/*
function() {
    var questionId = $this.attr("id").val();
    var question = questionArray.find(id: questionId);
    $("#question").html(question.q);
    $("#a1").html(question.a1);
    $("#a2").html(question.a2);
    $("#a3").html(question.a2);
    $("#a4").html(question.a2);
    $("#myModal").data("correct", question.ac);

}

function() {
    var answer = $(this).attr("id").val();
    var correctAnswer = $("#myModal").data("correct");
    if (answer === correctAnswer)
}
*/

//APPENDING A GAMEBOARD COLUMN AS ITS OWN DIV
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

var displayColumn= function(columnNumber, categoryName, categoryId) {
    var pointsWorth = 100;
    for(var i = 0; i < 6; i++){
        if(i === 0) {
            $('#column' + columnNumber).append('<div class="category"> '+ categoryName + '</div><br>');
        } else {
            $('#column' + columnNumber).append('<button class="game_block" id="' + categoryId + '-' + i + '" onclick="showQuestion('+categoryId+')">'+ pointsWorth + '</button><br>');
            pointsWorth +=100;
        }
    }
}



//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a game block 
//THEN makes question appear in footer


/// User Interface ///

/// Top-Level Application Code ///

var showQuestion = function(columnNumber, categoryName, categoryId) {
    $('#question_board').append('<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span></div></div>');
    
}

var removeQuestion = function() {
  // $('#question_board').remove(question);
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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

