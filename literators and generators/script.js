const dispaly=document.getElementById("numberDisplay");
const start=document.getElementById("startBtn");
const next=document.getElementById("nextBtn");
const reset=document.getElementById("resetBtn");
const statu=document.getElementById("status");

function* numberGenerator(){
      for(let i=5;i<=30;i+=5){
        yield i;
      }
}

let iterater;

start.addEventListener("click",()=>{
    iterater=numberGenerator();
next.disabled=false;
dispaly.textContent="Ready! Click Next Number.";
statu.textContent="Generator Started!";
});

next.addEventListener("click",()=>{

    const result=iterater.next();

    if(result.done){
        dispaly.textContent="Completed!";
        statu.textContent="All number Genarated!";
        next.disabled=true;
    }
    else{
        dispaly.textContent=result.value;
        statu.textContent="Number generater successfuly!";
    }

});

reset.addEventListener("click",()=>{
iterater=undefined;
dispaly.textContent="click start to brgin!";
statu.textContent="";
next.dispaly=true;
});



