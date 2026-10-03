let reginfo=document.querySelector(".reginfo");
let regp=document.querySelector(".regp");
let names=document.querySelector(".name");
let email=document.querySelector(".email");
let pass=document.querySelector(".pass");
let conpass=document.querySelector(".conpass");
let age=document.querySelector(".age");
let but=document.querySelector(".but");
let regbody=document.querySelector(".regis");
let lainfo=document.querySelector(".lainfo");
let lap=document.querySelector(".lap");
let laph3=document.querySelector(".laph3");
let fi=document.querySelectorAll(".fi input")
let par=document.querySelectorAll(".par");



but.addEventListener("click",function(){

let na=names.value;
let ea=email.value;
let pa=pass.value;
let con=conpass.value;
let ag=Number(age.value);


if(na===""||ea===""||pa===""||con===""||ag===""){
    
  regbody.style.background="#f8d6d6";
  lainfo.style.display="flex";
   reginfo.textContent="× Invalid Input";
   reginfo.style.color="red";
     fi.forEach(function(input){
       input.style.borderColor="orange";
     });
   regp.style.display="none";
  par.forEach(function(mes){
     mes.style.display="flex";
  });
}
else{
regbody.style.background="#d6f8d6";
  lainfo.style.display="flex";
   reginfo.textContent="✓ Vaild Input";
   reginfo.style.color="green";
   regp.style.display="none";
   lainfo.style.background="#d6f8d6"
   lap.textContent="✓";
   laph3.textContent="Registration Successful !";
   lainfo.style.color="green";
   but.style.background="green";
   but.textContent="Register 👍";
    fi.forEach(function(input){
       input.style.borderColor="green";
     });
    par.forEach(function(mes){
     mes.style.display="none";
  });
}

});