var QandA = [{
    question: "What house was Harry Potter sorted in?",
    choices: ["Gryfindor","Slytherin", "Hufflepuff", "Ravenclaw"],
    answer: "Gryfindor",
},{
    question: "Who is Harry Potter's best friend?",
    choices: ["Draco Malfoy","Ronald Weasley", "Viktor Krum", "Neville Longbottom"],
    answer: "Ronald Weasley",
},
{
    question: "What is the name of the villain who constantly tries to kill Harry Potter?",
    choices: ["Severus Snape","Lord Voldemort", "Vernon Dursley", "Albus Dumbledore"],
    answer: "Lord Voldemort",
},
{
    question: "How do wizards travel?",
    choices: ["By foot","Dustbuster", "Moonwalking", "Broom"],
    answer: "Ronald Weasley",
},
{
    question: "Who is the writer of the Harry Potter series?",
    choices: ["J.K. Rowling","Jon Snow", "Danielle Steel", "Stephen King"],
    answer: "J.K. Rowling",
},
]


// put your jquery in this bitch
$(document).ready(function() {
   var questionBox = $('#questions')
   // for loop {
   
   for (i = 0; i < QandA.length; i++) { 
      questionBox.append($('<div>' + QandA[i].question + '</div>'))  
    }
   
     
   
   
   
    });