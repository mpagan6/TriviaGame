$(document).ready(function() {

//question and answer variables

var QandAArray = [{
    "question" : "What house was Harry Potter sorted in?",
    "choices": ["Gryffindor","Slytherin","HufflePuff", "Ravenclaw"],
    "answer": "Gryffindor",
},{
    "question": "Who is Harry Potter's best friend?",
    "choices": ["Draco Malfoy","Ronald Weasley","Viktor Krum","Neville Longbottom"],
    "answer": "Ronald Weasley",
},
{
    "question": "What is the name of the villain who constantly tries to kill Harry Potter?",
    "choices": ["Severus Snape", "Lord Voldemort", "Vernon Dursley", "Albus Dumbledore"],
    "answer": "Lord Voldemort",
},
{
    "question": "How do wizards travel?",
    "choices": ["By foot","Dustbuster","Moonwalking","Broom"],
    "answer": "Broom",
},
{
    "question": "Who is the writer of the Harry Potter series?",
    "choices": ["J.K. Rowling","Jon Snow", "Danielle Steel", "Stephen King"],
    "answer": "J.K. Rowling",
},
{ 
    "question": "How many books are in the Harry Potter series?",
    "choices": ["10", "6","7","5"],
    "answer": "7",
},
{
    "question": "Harry Potter shared this same characteristic as his mother",
    "choices": ["Smile","Eyes","Laugh","Hands"],
    "answer":"Eyes",
},
{
    "question": "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
    "choices": ["He transfigures into a shark","He kisses a Mermaid","He eats gillyweed","He performs a bubblehead charm"],
    "answer": "He eats gillyweed",
}
    ];

//CORE LOGIC

$("#start-game").on("click", function () {
    game.start();
});

var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0) {
            console.log("Time's up!");
            game.done();
        }
    },
    
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $(".qa").prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>')
        $("#start-game").remove();
        for (var i = 0; i < QandAArray.length; i++) {
            $(".qa").append("<h3>"+ QandAArray[i].question+ "</h3>");
            for (var j = 0; j < QandAArray[i].choices.length; j++) {
                $(".qa").append("<input type='radio' name='question-"+[i]+"' value='"+QandAArray[i].choices[j]+"'>"+QandAArray[i].choices[j]);
            }
        }
    },
    
    done: function () {
        $.each($('input[name="question-0"]:checked'),function () {
            if($(this).val()===QandAArray[0].answer){
            game.correct++;
        } else {
            game.incorrect++;
            }
        });

        $.each($('input[name="question-1"]:checked'),function () {
            if($(this).val()===QandAArray[1].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2"]:checked'),function () {
            if($(this).val()===QandAArray[2].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3"]:checked'),function () {
            if($(this).val()===QandAArray[3].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4"]:checked'),function () {
            if($(this).val()===QandAArray[4].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-5"]:checked'),function () {
            if($(this).val()===QandAArray[5].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-6"]:checked'),function () {
            if($(this).val()===QandAArray[6].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-7"]:checked'),function () {
            if($(this).val()===QandAArray[7].answer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

       

        this.result();
    },
    
    result: function () {
        clearInterval(timer);
        $("#questionsandanswers h2").remove();
        $("#questionsandanswers").html("<h2>Done!</h2>");
        $("#questionsandanswers").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#questionsandanswers").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#questionsandanswers").append("<h3> Unanswered: " + (QandAArray.length-(this.incorrect+this.correct))+"</h3>");
    }
}



});    




//game variables
// var currentQuestion= 0;
// var score= 0;
// var totQuestions = QandA.length;

// var container= document.getElementById("triviaContainer");
// var questionElement= document.getElementById("questions");
// var ans1 = document.getElementById("ans1");
// var ans2 = document.getElementById("ans2");
// var ans3 = document.getElementById("ans3");
// var ans4 = document.getElementById("ans4");
// var nextButton= document.getElementById("nextButton");
// var resultCont= document.getElementById("results");




// function loadQuestion (QandAIndex) {
   
//     questionElement.textContent = [(QandAIndex) + '. '];
//     ans1.textContent = QandA.choice1;
//     ans2.textContent = QandA.choice2;
//     ans3.textContent = QandA.choice3;
//     ans4.textContent = QandA.choice4;

// }; 

// function loadNextQuestion (){
//     var selectedOption= document.querySelector('input[type=radio]:checked');
//     if(!selectedOption) {
//         alert('Please select your answer!');
//         return;
//     }
//     var answer = selectedOption.value;
//     if(questions[currentQuestion].answer === answer){
//         score += 1;
//     }
//     selectedOption.checked = false;
//     currentQuestion ++;
//     if (currentQuestion === totQuestions -1){
//         next.button.textContent = "Finished";
//     }
//     if (currentQuestion === totQuestions){
//         container.style.display='none';
//         results.display='';
//         results.textContent='Your score: ' + score;
//         return;
//     }
//     loadQuestion(currentQuestion);
// }



