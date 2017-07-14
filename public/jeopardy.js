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

var questionArray = [ /// Array of all questions as their own object with id, points, q, a's, and correct a
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
        q: "hello",
        a1: "Who is George Washington",
        a2: "Who is Barrack Obama",
        a3: "Who is Hillary Clinton",
        a4: "Who is Danny Hurley",
        ac: "a2"
    }
];

/// User Interface ///
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
            $gameblock.html(pointsWorth);
            pointsWorth +=100;

            $gameblock.on("click", function() {
                showQuestion(event);                    
                });

            $gameblock.appendTo('#column' + columnNumber);

        }
    }
}

window.onload = function(){
    $('#q_modal').hide();
    displayColumn(1, cat1.categoryName, cat1.categoryId);
    displayColumn(2, cat2.categoryName, cat2.categoryId);
    displayColumn(3, cat3.categoryName, cat3.categoryId);
    displayColumn(4, cat4.categoryName, cat4.categoryId);
    displayColumn(5, cat5.categoryName, cat5.categoryId);
    };
    for (var i = 1; i <= 4; i++) {
        $(`#a${i}`).click(function(event) {
            console.log('this.id is ' + this.id);
            console.log('correctAnswer is ' + $('#q_modal').attr('correctAnswer'));
            if (this.id == $('#q_modal').attr('correctAnswer')) {
                alert("Correct!");
            } else {
                alert("Incorrect!");
            }
        })
    }
/// Top-Level Application Code ///

//SELECTING A QUESTION
//GIVEN I am on the gameboard page 
//WHEN I click on a game block 
//THEN makes question appear in footer
var showQuestion = function(event) {
    var $modal = $('#q_modal');
    $modal.show();       
    var question = questionArray.filter(function(question) {
        return question.id == event.target.id;
    });
    console.log("the question array is: " + question);
    question = question[0];

    console.log("the question variable is: " + question);

    var $close = $('#closer');
        $close.on("click", function() {
        $('#q_modal').hide();
    });

    var $modalContent = $('#modal_c');
    
    $('#q').text(question.q);


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

    var correctAnswer = question.ac;
    console.log(correctAnswer);

    $modal.attr('correctAnswer', correctAnswer);
    var $answer1 = $('#a1');
    $answer1.html(question.a1);
    // $answer1.on("click", function() {
    //     if (this.id === correctAnswer) {
    //         alert("Correct!");
    //     } else {
    //     alert("Incorrect!");
    //     }
    // });

    var $answer2 = $('#a2');
    $answer2.html(question.a2);
    // $answer2.on("click", function() {

    //     if (this.id === correctAnswer) {
    //         alert("Correct!");
    //     } else {
    //     alert("Incorrect!");
    //     }
    // });

    var $answer3 = $('#a3');
    $answer3.html(question.a3);
    // $answer3.on("click", function() {
    //     if (this.id === correctAnswer) {
    //         alert("Correct!");
    //     } else {
    //     alert("Incorrect!");
    //     }
    // });


    var $answer4 = $('#a4');
    $answer4.html(question.a4);
    // $answer4.on("click", function() {
    //     if (this.id === correctAnswer) {
    //         alert("Correct!");
    //     } else {
    //     alert("Incorrect!");
    //     }
    // });

}




