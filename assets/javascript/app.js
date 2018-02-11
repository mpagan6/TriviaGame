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
        currentQuestionIndex:0,
        correct: 0,
        incorrect: 0,
        counter: 3,
        countdown: function () {
            game.counter--;
            $("#counter").html(game.counter);
            if(game.counter<=0) {
                console.log("Time's up!");
                game.counter= 3;
                game.done();
                }
            
        },
        
        start: function () {
            timer = setInterval(game.countdown, 1000);
            $(".qa").prepend('<h2>Time Remaining: <span id="counter">3</span> Seconds</h2>')
            $("#start-game").remove();
            // for (var i = 0; i < QandAArray.length; i++) {
                $(".qa").append("<h3>"+ QandAArray[game.currentQuestionIndex].question+ "</h3>");
                for (var j = 0; j < QandAArray[game.currentQuestionIndex].choices.length; j++) {
                    $(".qa").append("<input type='radio' name='question"+"' value='"+QandAArray[game.currentQuestionIndex].choices[j]+"'>"+QandAArray[game.currentQuestionIndex].choices[j]);
                }
            // }
        },
        nextQuestion: function () {
            game.countdown=10;
            game.currentQuestionIndex++;
            if (game.currentQuestionIndex === QandAArray.length){
                this.result()
            }else{
            console.log()
            $(".qa").empty();
            $(".qa").prepend('<h2>Time Remaining: <span id="counter">10</span> Seconds</h2>')
            // for (var i = 0; i < QandAArray.length; i++) {
                $(".qa").append("<h3>"+ QandAArray[game.currentQuestionIndex].question+ "</h3>");
                for (var j = 0; j < QandAArray[game.currentQuestionIndex].choices.length; j++) {
                    $(".qa").append("<input type='radio' name='question"+"' value='"+QandAArray[game.currentQuestionIndex].choices[j]+"'>"+QandAArray[game.currentQuestionIndex].choices[j]);
                }
            }
            // }
        },
        
        done: function () {
            $.each($('input[name="question"]:checked'),function () {
                if($(this).val()===QandAArray[game.currentQuestionIndex].answer){
                game.correct++;                 
                game.nextQuestion();
            } else {
                game.incorrect++;                
                game.nextQuestion();
                }
            });          
           
        },
        
        result: function () {
            clearInterval(timer);
            $("#questionsandanswers h2").remove();
            $("#questionsandanswers").html("<h2>Done!</h2>");
            $("#questionsandanswers").append("<h3>Correct Answers: " + this.correct + "</h3>");
            $("#questionsandanswers").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            $("#questionsandanswers").append("<h3> Unanswered: " + (QandAArray.length-(this.incorrect+this.correct))+"</h3>");
        //    how to append image at bottom
            // $("#questionsandanswers").append("href= assets/images/hptitle.jpg");
        }
    }
    
    
    
    });  