let display=document.getElementById("score");
let statu=document.getElementById("score-status");
let inc=document.getElementById("increase-btn");
let dec=document.getElementById("decrease-btn");
let res=document.getElementById("reset-btn");

function showingscore(){

    let score=0;

    function incre(){
      score++;
    };

    function  decre(){
       score--;
    };

    function repet(){
      score=0
    };

     function updateui(){
       display.textContent=score;

       if(score>0){
        statu.textContent="Score is Positive";
       }
       else if(score<0){
        statu.textContent="Score is Negetive";
       }
       else{
        statu.textContent="Score is Zero";
       }
     };

     inc.addEventListener("click",()=>{
        incre();
        updateui();
     })
     dec.addEventListener("click",()=>{
        decre();
        updateui();
     })
     res.addEventListener("click",()=>{
        repet();
        updateui();
     })

   return incre(),decre(),repet();

}

showingscore();



