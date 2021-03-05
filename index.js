
function submitQuiz() {
    let points = 0; // Börjar med att man har 0 poäng
  
    // Samla in alla svar:
    let answers = document.querySelectorAll("input[type='radio']:checked");
  
    
    for (let index = 0; index < answers.length; index++) {    // Programmet kör igenom loopen och gör om value till points
      points += parseInt(answers[index].value);
    }
  
    
    document.querySelector(".right-answers").innerHTML = points;
  
  
    document.querySelector(".questions").classList.toggle("invisible");   
    document.querySelector(".result").classList.toggle("invisible");      //Gömmer frågorna och visar resultatet:
  }
  
  function resetQuiz() {
  
    document.querySelector(".result").classList.toggle("invisible");    //Gömmer resultatet och visar frågorna:
    document.querySelector(".questions").classList.toggle("invisible");
  
    
    document.querySelector(".questions").reset();  //Nollställer quizet 
  }
  