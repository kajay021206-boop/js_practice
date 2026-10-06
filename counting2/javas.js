//counting number page
let countnum=document.getElementById("countnum");
let addcount=document.getElementById("addcount");
let subcount=document.getElementById("subcount");
let repeatcount=document.getElementById("restartcount");
let countingstart=document.getElementById("countingstart");
let countbuttons=document.querySelector(".count-buttons");
let counting=0;
let countclock=document.getElementById("countclock");

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
   countingstart.style.display="none";
   countclock.style.display="flex";
});

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
 
//clock in count page
function countclocksshow(){
    let newclockcount=new Date;
    let hours=newclockcount.getHours();
    let minutes=newclockcount.getMinutes();
    let secconds=newclockcount.getSeconds();
    let ampm= hours % 12 ? " PM ":" AM "; 
    let years=newclockcount.getUTCFullYear();
    let dates=newclockcount.getDate();
    let months=newclockcount.getUTCMonth();
      hours=hours % 12 || 12;
    countclock.textContent=hours+":"+minutes+":"+secconds+ampm+"  "+ dates+"," + months+","+ years;
}
countclocksshow();
setInterval(countclocksshow,1000);


