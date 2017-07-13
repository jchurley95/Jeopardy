/// Data & Core Business Logic ///

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
    "1", // category Id
    );

var cat2 = new category(
    "Music", //category name
    "2" // category Id
    );

var cat3 = new category(
    "Capitals of Countries", //category name
    "3" // category Id
    );

var cat4 = new category(
    "Danny's Favorite Things", //category name
    "4" // category Id
    );

var cat5 = new category(
    "Danny's Least Favorite Things", //category name
    "5" // category Id
    );

var questionArray = [
    {
        id: 11,
        pointsWorth: 100,
        q: "First African American President of the United States",
        a1: "Who is George Washington?",
        a2: "Who is Barrack Obama?",
        a3: "Who is Hillary Clinton?",
        a4: "Who is Danny Hurley?",
        ac: "a2"
    },
    {
        id: 12,
        pointsWorth: 200,
        q: "Year the United States gained its independence from the British Empire",
        a1: "Who is 1778?",
        a2: "What is 1776?",
        a3: "What is 1678?",
        a4: "What is 1872?",
        ac: "a2"
    },
    {
        id: 13,
        pointsWorth: 300,
        q: "Treaty that ended the Revolutionary War",
        a1: "What is the Treaty of Trent?",
        a2: "What is the Treaty of Florence?",
        a3: "What is the Treaty of Paris?",
        a4: "What is the Treaty of Versailles?",
        ac: "a3"
    },
    {
        id: 14,
        pointsWorth: 400,
        q: "President during the 19th and 20th century",
        a1: "Who is James K. Polk?",
        a2: "Who is Theodore Roosevelt?",
        a3: "Who is James Buchanan?",
        a4: "Who is William McKinley?",
        ac: "a4"
    },
    {
        id: 15,
        pointsWorth: 500,
        q: "This was the last US Navy ship sunk as a result of WW2",
        a1: "What is the USS Bullhead?",
        a2: "What is the USS Arizona?",
        a3: "What is the USS Louisitania?",
        a4: "What is the USS Missouri?",
        ac: "a1"
    },
    {
        id: 21,
        pointsWorth: 100,
        q: 'Recorded the song "Hey Jude"' ,
        a1: "Who is The Beatles",
        a2: "Who is The Rolling Stones",
        a3: "Who is Lil' Yachty",
        a4: "Who is Kanye West",
        ac: "a1"
    },
    {
        id: 22,
        pointsWorth: 200,
        q: '"Panda, panda, I got..."',
        a1: "What is broads in Atlanta",
        a2: "What is respectable, young women in the UK",
        a3: "What is nice ladies in Japan",
        a4: "What is Danny Hurley",
        ac: "a2"
    },
    {
        id: 23,
        pointsWorth: 300,
        q: "Studio where the Beatles recorded 191 songs.",
        a1: "What is Downton Abby?",
        a2: "What is Abby Road?",
        a3: "What is Muscle Schoals?",
        a4: "What is Danny Hurley's Home Studio?",
        ac: "a1"
    },
    {
        id: 24,
        pointsWorth: 400,
        q: "What is Jay-z’s real name?",
        a1: "What is Shaun Carter?",
        a2: "What is Led Zeppelin",
        a3: "What is Jake Gyllenhall",
        a4: "What is Danny Hurley",
        ac: "a2"
    },
    {
        id: 25,
        pointsWorth: 500,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 31,
        pointsWorth: 100,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 32,
        pointsWorth: 200,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 33,
        pointsWorth: 300,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 34,
        pointsWorth: 400,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 35,
        pointsWorth: 500,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 41,
        pointsWorth: 100,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 42,
        pointsWorth: 200,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 43,
        pointsWorth: 300,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 44,
        pointsWorth: 400,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 45,
        pointsWorth: 500,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 51,
        pointsWorth: 100,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 52,
        pointsWorth: 200,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 53,
        pointsWorth: 300,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 54,
        pointsWorth: 400,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    },
    {
        id: 55,
        pointsWorth: 500,
        q: "",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    }
];

/// LOAD THE BOARD
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
            var $catName = $('<div>'); 
            $catName.addClass("category");
            $catName.html(categoryName);
            $('#column' + columnNumber).append($catName);

        } else {

            var $gameblock = $('<button>');
            $gameblock.addClass("game_block");
            var gid = categoryId + '' + i;
            var pgid = parseInt(gid);
            $gameblock.attr('id', pgid);
            console.log($gameblock.id);
            $gameblock.on("click", function() {
                showQuestion;
            });
            $gameblock.html(pointsWorth);
            pointsWorth +=100;
            $gameblock.appendTo('#column' + columnNumber);
        }
    }
}

var showQuestion = function() {

            var $modal = $('#q_modal');
            $modal.attr('id', "q_modal" + categoryId + i);
            var $modalContent = $('#modal_c');

            var question = questionArray.filter(function(question) {
                return question.id === pgid;
            });

            var $close = $('#closer');
            $close.on("click", function() {
                $modal.css('display', "none");
            })

            var $questionSpace = $('<div>');
            $questionSpace.attr('id', 'question');
            $questionSpace.html(question.q);
            $questionSpace.appendTo($modalContent);

           

            var $answer1 = $('<button>');
            $answer1.attr('id', 'a1');
            $answer1.html(question.a1);
            $answer1.on("click", checkCorrect);
            $answer1.appendTo($modalContent);

            var $answer2 = $('<button>');
            $answer2.attr('id', 'a2');
            $answer2.html(question.a2);
            $answer2.on("click", checkCorrect);
            $answer2.appendTo($modalContent);

            var $answer3 = $('<button>');
            $answer3.attr('id', 'a3');
            $answer3.html(question.a3);
            $answer3.on("click", checkCorrect);
            $answer3.appendTo($modalContent);


            var $answer4 = $('<button>');
            $answer4.attr('id', 'a4');
            $answer4.html(question.a4);
            $answer4.on("click", checkCorrect);
            $answer4.appendTo($modalContent);
}
            //$("#q_modal").attr("correct", question.ac);

// window.onclick = function(event) {
//     if (event.target == $modal) {
//         $modal.css('display', "none");
//     }
// }

window.onload = function(){
displayColumn(1, cat1.categoryName, cat1.categoryId);
displayColumn(2, cat2.categoryName, cat2.categoryId);
displayColumn(3, cat3.categoryName, cat3.categoryId);
displayColumn(4, cat4.categoryName, cat4.categoryId);
displayColumn(5, cat5.categoryName, cat5.categoryId);
};

var checkCorrect = function(event) {
    // var answer = event.target.attr("id").val();
    // var correctAnswer = $("#q_modal").attr("ac").val();
    // console.log(answer);
    // console.log(ac);
    // if (answer === correctAnswer) {
    //     alert("Correct!");
    // }
    // else {
    //     alert("Incorrect.");
    // }
}




//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a game block 
//THEN makes question appear in footer


/// User Interface ///

/// Top-Level Application Code ///


var removeQuestion = function() {
  // $('#question_board').remove(question);
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

