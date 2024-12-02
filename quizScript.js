const askedQuestion = document.getElementById("question");
const answer1 = document.getElementById("ans1");
const answer2 = document.getElementById("ans2");
const answer3 = document.getElementById("ans3");
const answer4 = document.getElementById("ans4");
const answers = document.getElementsByClassName("ansFlex");
const scoreNumber = document.getElementById("scoreNum");
const nextBtnContain = document.getElementById("nextButtonContainer");
const questionNum = document.getElementById("questionNumber");
const scoreTxt = document.getElementById("scoreText");

let currentQuestion = 0;


// All questions and options
const quizQuestions = [
  {
      questionText: "How many stomachs does a llama have?",
      options: ["One", "Two", "Three", "Four"],
                             //Correct
      answer: "Three"
  },
  {
      questionText: "How many colors are there on a Rubik's Cube?",
      options: ["3", "4", "5", "6"],
                              //correct
      answer: "6"
  },
  {
      questionText: "What short-lived product did Pepsi introduce in 1992?",
      options: ["Crystal Pepsi", "Pepsi Blue", "Slice", "Pepsi Twist"],
               //correct
      answer: "Crystal Pepsi"
  },
  {
      questionText: "Which element has the atomic number 81?",
      options: ["Gold", "Thallium", "Uranium", "Silver"],
                       //correct
      answer: "Thallium"
  },
  {
      questionText: "How many squares are on a checker board?",
      options: ["72", "56", "48", "64"],
                               //correct
      answer: "64"
  },
  {
      questionText: "What was the first Super Bowl to use Roman numerals in its title?",
      options: ["Super Bowl V", "Super Bowl VII", "Super Bowl III", "Super Bowl X"],
                  //correct
      answer: "Super Bowl V"
  },
  {
      questionText: "Which type of nut is used to make Nutella?",
      options: ["Macadamia", "Candlenut", "Walnut", "Hazelnut"],
                                                    //correct
      answer: "Hazelnut"
  },
  {
      questionText: "A top-sider is a type of what?",
      options: ["shoe", "car", "jacket", "hat"],
              //correct
      answer: "shoe"
  },
  {
      questionText: "Melissophobia is the fear of what?",
      options: ["bees", "eyes", "The dark", "trees"],
             //correct
      answer: "bees"
  },
  {
      questionText: "What Coca-Cola flavor debuted the same year as New Coke?",
      options: ["Diet Coke", "Cherry Coke", "Coca-Cola Blak", "Vanilla Coke"],
                              //correct
      answer: "Cherry Coke"
  },
  {
      questionText: "Granchio is Italian for what seafood?",
      options: ["Shrimp", "Cod", "Tuna", "Crab"],
                                       //correct
      answer: "Crab"
  },
  {
      questionText: "What was the first video game played in space?",
      options: ["Super Mario Bros.", "Pong", "Tetris", "Pac-Man"],
                                            //correct
      answer: "Tetris"
  },
  {
      questionText: "What does a spermologer collect?",
      options: ["Lava", "Trivia", "Mucus", "Bacteria"],
                       //correct
      answer: "Trivia"
  },
  {
      questionText: "Which famous sandwich was formerly known as the Blue Ribbon Burger?",
      options: ["Whopper", "Double-Double", "ButterBurger", "Big Mac"],
                                                            //correct
      answer: "Big Mac"
  },
  {
      questionText: "What was a Nuremberg egg?",
      options: ["A type of clock", "A very weird way to cook and eat an egg", "A type of lamp", "A type of jewelry"],
                   //correct
      answer: "A type of clock"
  },
  {
      questionText: "What soft drink called itself The Un-Cola?",
      options: ["7-Up", "Sprite", "Mountain Dew", "Dr. Pepper"],
              //correct
      answer: "7-Up"
  },
  {
      questionText: "In pool, what color is the 4-ball",
      options: ["Yellow", "Green", "Blue", "Purple"],
                                          //correct
      answer: "Purple"
  },
  {
      questionText: "What caused the first computer bug?",
      options: ["A coding error", "A rat chewing on one of the wires", "A literal bug", "A spilled drink"],
      answer: "A literal bug",                                            //correct
  },
  {
      questionText: "Where were fortune cookies invented?",
      options: ["United States", "Germany", "China", "Iran"],
                  //correct
      answer: "United States"
  },
  {
      questionText: "What ice-cream chain once sold a ketchup-flavored ice cream?",
      options: ["Dairy Queen", "Cold Stone", "Baskin-Robbins", "Ben & Jerry's"],
                                                //correct
      answer: "Baskin-Robbins"
  },
]

nextQuestion();


/* When an answer is clicked regardless if it is right or wrong, it will create a button that
will take you to the next question when clicked */
function nextQuestionBtnAdd(){
  nextBtnContain.textContent = "";

  let nextButton = document.createElement("button");
  nextButton.classList.add("nextButtonStyle");
  nextButton.innerText = "Next Question!";
  let container = document.createElement("div");
  container.appendChild(nextButton);

  nextBtnContain.appendChild(container);

  currentQuestion++;


  nextButton.addEventListener('click', nextQuestion);
  nextButton.addEventListener('click', returnStyle);
  nextButton.addEventListener('click', nextButtonRemove);
}

/*This is meant for the last question, it just removes the next button and prevents going to
question 21 and beyond*/
function nextButtonRemove(){
    nextBtnContain.textContent = "";
    if(parseFloat(questionNum.innerText) === 21){
        questionNum.innerText = parseFloat(questionNum.innerText) - 1;
        scoreTxt.innerText = "Final Score!";
    }
}

//These functions check if the answer in the button is the correct answer to the current question
function checkIfBtn1Correct(){
   if(answer1.innerText === quizQuestions[currentQuestion].answer){
       answer1.style.border = "3px solid green";
       answer1.style.backgroundColor = "green";
       scoreNumber.innerText = parseFloat(scoreNumber.innerText) + 1;
   }
   else{
       answer1.style.border = "3px solid red";
       answer1.style.backgroundColor = "red";
   }
}


function checkIfBtn2Correct(){
   if(answer2.innerText === quizQuestions[currentQuestion].answer){
       answer2.style.border = "3px solid green";
       answer2.style.backgroundColor = "green";
       scoreNumber.innerText = parseFloat(scoreNumber.innerText) + 1;
   }
   else{
       answer2.style.border = "3px solid red";
       answer2.style.backgroundColor = "red";
   }
}


function checkIfBtn3Correct(){
   if(answer3.innerText === quizQuestions[currentQuestion].answer){
       answer3.style.border = "3px solid green";
       answer3.style.backgroundColor = "green";
       scoreNumber.innerText = parseFloat(scoreNumber.innerText) + 1;
   }
   else{
       answer3.style.border = "3px solid red";
       answer3.style.backgroundColor = "red";
   }
}


function checkIfBtn4Correct(){
   if(answer4.innerText === quizQuestions[currentQuestion].answer){
       answer4.style.border = "3px solid green";
       answer4.style.backgroundColor = "green";
       scoreNumber.innerText = parseFloat(scoreNumber.innerText) + 1;
   }
   else{
       answer4.style.border = "3px solid red";
       answer4.style.backgroundColor = "red";
   }
}

// Clicking on the next question button will remove itself then go to the next question
function nextQuestion(){
  questionNum.innerText = parseFloat(questionNum.innerText) + 1;
  askedQuestion.innerText = quizQuestions[currentQuestion].questionText;

  for(let i = 0; i < answers.length; i++){
      answers[i].innerText = quizQuestions[currentQuestion].options[i];
  }
 
  nextBtnContain.textContent = "";
}


//When the next question button is clicked, it will return the original style to all the buttons
function returnStyle(){
   answer1.style.border = "3px solid rgb(255, 107, 54)";
   answer1.style.backgroundColor = "rgb(255, 188, 63)";

   answer2.style.border = "3px solid rgb(255, 107, 54)";
   answer2.style.backgroundColor = "rgb(255, 188, 63)";

   answer3.style.border = "3px solid rgb(255, 107, 54)";
   answer3.style.backgroundColor = "rgb(255, 188, 63)";

   answer4.style.border = "3px solid rgb(255, 107, 54)";
   answer4.style.backgroundColor = "rgb(255, 188, 63)";
}

//These all add an event listener to each button to check if their answer is correct
answer1.addEventListener('click', checkIfBtn1Correct);
answer2.addEventListener('click', checkIfBtn2Correct);
answer3.addEventListener('click', checkIfBtn3Correct);
answer4.addEventListener('click', checkIfBtn4Correct);


/*This adds an event listener to all the answer buttons, specifically to add the next question
button regardless of whether the answer is right or wrong*/
for(let i = 0; i < answers.length; i++){
  answers[i].addEventListener("click", nextQuestionBtnAdd);
}
