//counting number page
let countnum=document.getElementById("countnum");
let addcount=document.getElementById("addcount");
let subcount=document.getElementById("subcount");
let repeatcount=document.getElementById("restartcount");
let countingstart=document.getElementById("countingstart");
let countbuttons=document.querySelector(".count-buttons");
let counting=0;

//counting working process
function showcount(){

addcount.addEventListener("click", function(){
    counting++;
    countnum.textContent=counting;
    colorcount();
});
subcount.addEventListener("click", function(){
    counting--;
    countnum.textContent=counting;
    colorcount();
});
repeatcount.addEventListener("click", function(){
    counting=0;
    countnum.textContent=counting;
    colorcount();
});
}

//showing counting
countingstart.addEventListener("click",function(){
   countbuttons.style.opacity="1";
   showcount();
   keycount();
   
})

//by using keydown
function keycount(){
addcount.addEventListener("keydown", function(){
    counting++;
    countnum.textContent=counting;
});
subcount.addEventListener("keydown", function(){
    counting--;
    countnum.textContent=counting;
});
repeatcount.addEventListener("keydown", function(){
    counting=0;
    countnum.textContent=counting;
});  
}

//for colouring the numbers
function colorcount(){
  

    if(counting < 0){
        countnum.style.color="red";
    }
    if(counting > 0){
        countnum.style.color="#3bff05";
    }
    if(counting===0){
        countnum.style.color="#fff";
    }
}
 


