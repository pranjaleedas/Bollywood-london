//on clicking the Submit button, run the function getScore.
var submitButton = document.getElementById("submit"); 
submitButton.addEventListener("click", getScore);

//on clicking the Clear answers button, run the function resetQuiz.
var resetButton = document.getElementById("reset"); 
resetButton.addEventListener("click", resetQuiz);

function getScore(){
  var score= 0;
  //checking if the id of the fetched element is equal to the id of the correct answer
  if(document.getElementById("one-one").checked){ 
    score= score + 1;
  }
  if(document.getElementById("two-three").checked){
    score= score + 1;
  }
  if(document.getElementById("three-one").checked){
    score= score + 1;
  }
  
  var userAnswers = document.querySelectorAll(".quiz-results div");
  userAnswers.forEach((answer,index) => {
    
    //removing the class 'final-score' which would have been added in the previous iterations of the loop
    answer.classList.remove("final-score"); 
    if(index==score){

      //adding the class 'final-score' only if the index of current element of the loop matches the score. According to the CSS code, only the class with the name 'final-score' is displayed.
      answer.classList.add("final-score"); 
      document.getElementById("final-score").scrollIntoView();
    }
  });
}

function resetQuiz(){
  //changing scroll position to top of page when it reloads
  history.scrollRestoration = 'manual'; 
  location.reload();
}

