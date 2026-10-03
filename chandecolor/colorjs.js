let select=document.querySelector(".selectco");
let input=document.querySelector(".input");
let right=document.querySelector(".right");
let change=document.querySelector(".change");
let se=document.querySelector(".sa");
//color chnahe button
change.addEventListener("click",function(){
let inp=input.value;

right.style.background=inp;
});


right.addEventListener("mouseover",function(){
   right.style.transform="scale(1.05)";
   right.textContent="Hover Effect!";
   right.style.transition="0.5s";
   
});

right.addEventListener("mouseout",function(){
   right.style.transform="scale(1)";
   right.textContent="Move your mouse over me!";
});


se.addEventListener("click",function(){
let shares=select.value;

right.style.background=shares;
})

