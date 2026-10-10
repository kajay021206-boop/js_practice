let named=document.querySelector(".name");
let age=document.querySelector(".age");
let skill=document.querySelector(".skill");
let course=document.querySelector(".course");
let gen=document.querySelector(".gen");
let repet=document.querySelector(".repet");
let proname=document.querySelector(".proname");
let ages=document.querySelector(".s");
let courses=document.querySelector(".ss");
let show=document.querySelector(".show");
let summary=document.querySelector(".summary");
let profile=document.querySelector(".profile")


gen.addEventListener("click",()=>{

let getname=named.value.trim();
let getage=age.value.trim();
let getskill=skill.value;
let getcourse=course.value.trim();

if (getname === "" || getage === "") {
    alert("Please enter your name and age!");
    return;
}

const student={
name:getname,
age:getage,
course:getcourse,
skill:getskill    
}

   const { name, age, course, skill } = student;

proname.textContent=getname;
ages.textContent=getage;
courses.textContent=getskill;
summary.textContent = `Hi, I'm ${getname}, a ${getage}-year-old student currently learning ${getcourse}. My skills include ${getskill}.`;
show.textContent=getcourse;
profile.style.display="flex";

})


