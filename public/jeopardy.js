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
    "Science", //category name
    "4" // category Id
    );

var cat5 = new category(
    "Sports", //category name
    "5" // category Id
    );

var questionArray = [ /// Array of all questions as their own object with id, points, q, a's, and correct a
    // CATEGORY 1 UNITED STATES HISTORY
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
    // CATEGORY 2 MUSIC
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
        q: "Actor Bruce Willis became known as a musician when he released this song encouraging all to respect themselves",
        a1: 'What is "R-E-S-P-E-C-T"?',
        a2: 'Who is "Respect"?',
        a3: 'Who is "Respect Me Please"?',
        a4: 'Who is "Respect Youself"?',
        ac: "a2"
    },
    // CATEGORY 3 CAPITALS OF COUNTRIES
    {
        id: 31,
        pointsWorth: 100,
        q: "Cairo",
        a1: "What is Switzerland?",
        a2: "What is Belize?",
        a3: "What is Belgium?",
        a4: "What is Egypt?",
        ac: "a2"
    },
    {
        id: 32,
        pointsWorth: 200,
        q: "Amsterdam",
        a1: "What is Netherlands?",
        a2: "What is Jordan?",
        a3: "What is Samoa?",
        a4: "What is Algeria?",
        ac: "a1"
    },
    {
        id: 33,
        pointsWorth: 300,
        q: "Brussels",
        a1: "What is Australia?",
        a2: "What is Argentina?",
        a3: "What is Belgium?",
        a4: "What is Hungary?",
        ac: "a3"
    },
    {
        id: 34,
        pointsWorth: 400,
        q: "Amman",
        a1: "What is Jordan?",
        a2: "What is Netherlands?",
        a3: "What is Turkey?",
        a4: "What is Nigeria?",
        ac: "a1"
    },
    {
        id: 35,
        pointsWorth: 500,
        q: "Baku",
        a1: "What is Azerbaijan?",
        a2: "What is Thailand?",
        a3: "What is Lebanon?",
        a4: "What is Serbia?",
        ac: "a1"
    },
    // CATEGORY 5 SCIENCE QUESTIONS
    {
        id: 41,
        pointsWorth: 100,
        q: "First step in the Scientific Method",
        a1: "What is ask a question?",
        a2: "What is form an opinion?",
        a3: "What is jump to conclusions?",
        a4: "What is ask a friend the answer?",
        ac: "a1"
    },
    {
        id: 42,
        pointsWorth: 200,
        q: "An object at rest will stay at rest unless acted on by an outside: ",
        a1: "What is matter?",
        a2: "What is science?",
        a3: "What is opinion?",
        a4: "What is force?",
        ac: "a4"
    },
    {
        id: 43,
        pointsWorth: 300,
        q: "Acceleration =",
        a1: "What is velocity/distance?",
        a2: "What is time/velocity?",
        a3: "What is math?",
        a4: "What is distance/time?",
        ac: "a4"
    },
    {
        id: 44,
        pointsWorth: 400,
        q: "Packets of energy inside light?",
        a1: "What are amps?",
        a2: "What are lisosomes?",
        a3: "What are photons?",
        a4: "What?",
        ac: "a3"
    },
    {
        id: 45,
        pointsWorth: 500,
        q: "The Earth's protective shield generated by its iron core",
        a1: "What is the atmosphere?",
        a2: "What is the ozone layer?",
        a3: "What  is the magnetosphere?",
        a4: "What is the the mesosphere?",
        ac: "a3"
    },
    {
        id: 51,
        pointsWorth: 100,
        q: "If you can dodge a wrench, you can dodge a:",
        a1: "What is bigger wrench?",
        a2: "What is moving vehicle?",
        a3: "What is bullet?",
        a4: "What is ball?",
        ac: "a4"
    },
    {
        id: 52,
        pointsWorth: 200,
        q: "This was the first African American in Major League Baseball",
        a1: "Who is Hank Aaron?",
        a2: "Who is Jackie Robinson?",
        a3: "Who is Babe Ruth?",
        a4: "Who is Aaron Judge?",
        ac: "a2"
    },
    {
        id: 53,
        pointsWorth: 300,
        q: "The most common sport in the world",
        a1: "What is basketball?",
        a2: "What is rugby?",
        a3: "What is baseball?",
        a4: "What is soccer?",
        ac: "a4"
    },
    {
        id: 54,
        pointsWorth: 400,
        q: "This team won the 2010 World Cup",
        a1: "Who is Brazil?",
        a2: "Who is Germany?",
        a3: "Who is Ghana?",
        a4: "Who is Spain?",
        ac: "a4"
    },
    {
        id: 55,
        pointsWorth: 500,
        q: "First US President to throw a ceremonial first pitch.",
        a1: "Who is Polk?",
        a2: "Who is McKinley?",
        a3: "Who is Carter",
        a4: "Who is Taft?",
        ac: "a4"
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
    checkCorrect();
};

var checkCorrect = function() {
    for (var i = 1; i <= 4; i++) { // Hassan helped here a lot
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
    question = question[0];

    var $close = $('#closer');
        $close.on("click", function() {
        $('#q_modal').hide();
    });

    var $modalContent = $('#modal_c');
    
    $('#q').text(question.q);


    //SUBMITTING CORRECT/INCORRECT ANSWER
    //GIVEN I am on the modal for answering a question 
    //WHEN I submit my answer 
    //AND answer is correct 
    //THEN Tells me answer is correct or incorrect
    //AND adds/subtracts score

    var correctAnswer = question.ac;
    console.log(correctAnswer);

    $modal.attr('correctAnswer', correctAnswer);
    var $answer1 = $('#a1');
    $answer1.html(question.a1);

    var $answer2 = $('#a2');
    $answer2.html(question.a2);

    var $answer3 = $('#a3');
    $answer3.html(question.a3);

    var $answer4 = $('#a4');
    $answer4.html(question.a4);

}




