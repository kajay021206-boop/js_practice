let statustext=document.getElementById("status");
let questiontext=document.getElementById("question");
let optionscontainer=document.getElementById("options");
let scoretext=document.getElementById("score");
let startbtn=document.getElementById("start-btn");
let nextbtn=document.getElementById("next-btn");
let restartbtn=document.getElementById("restart-btn");
let feedback=document.getElementById("feedback");
let questioncount=document.getElementById("question-count");
let progressbar=document.getElementById("progress-bar");

let questions=[
    
{
        question: "Which keyword is used to declare a constant?",
        options: ["var", "let", "const", "static"],
        answer: "const"    
},

{
        question: "Which method handles a rejected Promise?",
        options: [".then", ".catch()", ".map()", ".filter()"],
        answer: ".catch()"    
},

{
        question: "Which keyword allows us to wait for a promise inside an async function?",
        options: ["wait", "defer", "await", "setTimeout"],
        answer: "await"    
}


];


let currentquestionindex=0;
let score=0;
let answerselected=false;


function loadquestion(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let ma=Math.random()>0;

        if(ma){
            resolve("Question loaded successfully!");
        }
        else{
          reject("Failed to load question!");  
        }
        
      },1000);
   });
}

async function startqiiz(){

statustext.textContent="Loading question.....";

try{
  const message=await loadquestion();
  statustext.textContent="Quiz is Ready";
  displayquestion();
}
catch(error){
  statustext.textContent="Failed to load question!";
  console.log(error);
}
finally{
  console.log("Loading attempt finished!");
}


}

function displayquestion(){
  nextbtn.hidden = true;
answerselected = false;
feedback.textContent = "";
  const currentquestion=questions[currentquestionindex];
  questiontext.textContent=currentquestion.question;
  optionscontainer.innerHTML="";
   currentquestion.options.forEach((option)=>{
    const button=document.createElement("button");
    button.classList.add("option-btn");
    button.textContent=option;
    button.addEventListener("click",()=>{
      if(answerselected){
        return;
      }
      answerselected=true;

      if(option===currentquestion.answer){
       
        score++;
        scoretext.textContent=`${score}/${questions.length}`;
        feedback.textContent=`Correct Answer!`;
        button.classList.add("correct");
      }
      else{
       
        feedback.textContent="Wrong Answer";
        button.classList.add("Wrong");
      }
      optionscontainer.querySelectorAll("button").forEach((btn)=>{
        btn.disabled=true;
      });
      nextbtn.hidden=false;
    });
    optionscontainer.appendChild(button);
   });  
  questioncount.textContent=`question ${currentquestionindex+1} of ${questions.length}`;
  progressbar.style.width=(currentquestionindex+1)/questions.length*100+"%";
}


startbtn.addEventListener("click",startqiiz);

nextbtn.addEventListener("click",()=>{
   
currentquestionindex++;
if(currentquestionindex<questions.length){
  nextbtn.hidden=true;
  startqiiz();
}
else{
  questiontext.textContent="Quiz Completed !";
  optionscontainer.innerHTML="";
  feedback.textContent=`Final score: ${score} / ${questions.lenght}`;
  statustext.textContent="Great Job";
  nextbtn.hidden=true;
  restartbtn.hidden=false;
}


});

restartbtn.addEventListener("click", () => {
    currentquestionindex = 0;
    score = 0;
    answerselected = false;

    scoretext.textContent = `0 / ${questions.length}`;
    progressbar.style.width = "0%";
    questioncount.textContent = `Question 0 of ${questions.length}`;
    feedback.textContent = "";

    restartbtn.hidden = true;
    startbtn.hidden = false;

    questiontext.textContent = "Click Start Quiz to begin!";
    optionscontainer.innerHTML = "";
    statustext.textContent = "Ready to test your JavaScript skills?";
});
