let student=document.querySelector(".student");
let maths=document.querySelector(".maths");
let science=document.querySelector(".science");
let english=document.querySelector(".english");
let roll=document.querySelector(".roll");
let name=document.querySelector(".name");
let mat=document.querySelector(".mat");
let sci=document.querySelector(".sci");
let eng=document.querySelector(".eng");
let tot=document.querySelector(".tot");
let ave=document.querySelector(".ave");
let sta=document.querySelector(".sta");
let add=document.querySelector(".add");
let table=document.querySelector(".table");
let doe=document.querySelector(".doe");
let arr=[];
let count=1;
let tostu=document.querySelector(".tostu");
let passt=document.querySelector(".passt");
let faist=document.querySelector(".faist");
let topper=document.querySelector(".topper");
let tofind=document.querySelector(".tofind");
let go=document.querySelector(".go");
let stuname=document.querySelector(".stuname");
let sturoll=document.querySelector(".sturoll");
let stumar=document.querySelector(".stumar");
let stusta=document.querySelector(".stusta");
let stufai=document.querySelector(".stufai");
let stupas=document.querySelector(".stupas");






add.addEventListener("click",function(){

    let s=student.value.trim();
    let mathe=Number(maths.value.trim());
    let scies=Number(science.value.trim());
    let engli=Number(english.value.trim());


if(s===""){
    alert("Please enter Student name");
    return;
}
if(maths.value.trim()==="" || science.value.trim()==="" || english.value.trim()===""){
    alert("Please fill the marks");
    return;
}
if(mathe>100||scies>100||engli>100||mathe<0||scies<0||engli<0){
    alert("Please enter valid Marks");
    return;
}

 let show=count++;
let obj={
    name:s,
    maths:mathe,
    science:scies,
    english:engli  
};
arr.push(obj);
console.log(arr);

let totalmar=mathe+scies+engli;
let avg=totalmar/3;

let totalstudent=arr.length;
tostu.textContent=totalstudent;
let fil=arr.filter(function(student){
    return student.maths<35 || student.science<35 || student.english<35;
})
faist.textContent=fil.length;
let passed=arr.filter(function(student){
  return student.maths>=35 && student.science>=35 && student.english>=35;
});
passt.textContent=passed.length;
let to=arr.filter(function(student){
     return student.maths>=90 && student.science>=90 && student.english>=90;
});
topper.textContent=to.length;


    let div=document.createElement("div");
    div.className="start";
    let h3=document.createElement("h3");
    h3.className="roll";
    h3.textContent=show;



    let h4=document.createElement("h3");
    h4.className="name";
    h4.textContent=s;

     let h5=document.createElement("h3");
    h5.className="mat";
    h5.textContent=mathe;

     let h6=document.createElement("h3");
    h6.className="sci";
    h6.textContent=scies;

     let h7=document.createElement("h3");
    h7.className="eng";
    h7.textContent=engli;

     let h8=document.createElement("h3");
    h8.className="tot";
    h8.textContent=totalmar;

     let h9=document.createElement("h3");
    h9.className="ave";
    h9.textContent=avg.toFixed(2);

     let h10=document.createElement("h3");
    h10.className="sta"; 
    
    if(mathe<35||scies<35||engli<35){
     h10.textContent="Fail";
     h10.style.background="red";
    }
   else{
     h10.textContent="Pass";
    }


   
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    div.appendChild(h7);
    div.appendChild(h8);
    div.appendChild(h9);
    div.appendChild(h10);
         
    doe.appendChild(div);


   student.value=""; 
   maths.value="";
   science.value="";
   english.value="";




});


go.addEventListener("click", function(){

 let goinput=tofind.value.trim();

 let fin=arr.find(function(student){
return student.name===goinput;
 });



 if(fin){
    stuname.textContent=goinput;
    stuname.style.color = "white";
    stumar.textContent=fin.maths+fin.science+fin.english;

    let passedsubject=0;
    if(fin.maths>=35){
        passedsubject++;
    }
     if(fin.science>=35){
        passedsubject++;
    }
     if(fin.english>=35){
        passedsubject++;
    }

    stupas.textContent=passedsubject;

    let failedsubjects=0;
     if(fin.maths<35){
        failedsubjects++;
    }
     if(fin.science<35){
        failedsubjects++;
    }
     if(fin.english<35){
        failedsubjects++;
    }
    stufai.textContent=failedsubjects;


    if(failedsubjects>0){
        stusta.textContent="fail";
        stusta.style.color="red";
    }
    else{
          stusta.textContent="pass";
        stusta.style.color="green";
    }
    
 }
 else{
    stuname.textContent="not found";
    stuname.style.color="red";
    stumar.textContent="not found";
    stusta.textContent = "not found";
    stupas.textContent = "not found";
    stufai.textContent = "not found";
    stumar.style.color="red";
    stusta.style.color="red";
    stupas.style.color="red";
    stufai.style.color="red";
 }

});