let names=document.querySelector(".name");
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

let getname=names.value.trim();
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

const {
name:studentname,age:studentage,course:studentcourse,skill:studentskill
}=student;

const update={
    ...student,
    age:student.age+1,
    course:"Advance Javascript"
};

function showskill(...skill){
    return skill.join(", ");
}

 let allSkills = showskill(
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    );

proname.textContent=getname;
ages.textContent=getage;
courses.textContent=getskill;
summary.textContent = `Hi, I'm ${getname}, a ${getage}-year-old student currently learning ${getskill}. My skills include ${getcourse}.`;
show.textContent=getcourse;
profile.style.display="flex";

  console.log("Original student:", student);
    console.log("Updated student:", update);
    console.log("All skills:", allSkills);

});


