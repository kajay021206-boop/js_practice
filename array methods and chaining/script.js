const students=[
    { name: "Priya", marks: 45 },
    { name: "Arun", marks: 95 },
    { name: "Sita", marks: 65 },
    { name: "Kiran", marks: 35 },
    { name: "Divya", marks: 78 },
    { name: "Rahul", marks: 55 },
    { name: "Sneha", marks: 92 },
    { name: "Vijay", marks: 40 },
    { name: "Anu", marks: 30 },
    { name: "Raj", marks: 80 }
];
const allbtn=document.getElementById("allBtn");
const passedbtn=document.getElementById("passedBtn");
const topbtn=document.getElementById("topBtn");
const sortbtn=document.getElementById("sortBtn");
const averagebtn=document.getElementById("averageBtn");
const studentlist=document.getElementById("studentList");

allbtn.addEventListener("click",()=>{
    studentlist.innerHTML="";
students.forEach((student)=>{
    let card=document.createElement("div");
    card.classList.add("student-card");
    let h3=document.createElement("h3");
    h3.textContent=student.name;
    let p=document.createElement("p");
    p.textContent=student.marks;

    card.appendChild(h3);
    card.appendChild(p);
    studentlist.appendChild(card);
});
});

passedbtn.addEventListener("click",()=>{
     const result= students.filter(num=>num.marks>=40);
    studentlist.textContent="";
     result.forEach((student)=>{
         let card=document.createElement("div");
    card.classList.add("student-card");
    let h3=document.createElement("h3");
    h3.textContent=student.name;
    let p=document.createElement("p");
    p.textContent=student.marks;

    card.appendChild(h3);
    card.appendChild(p);
    studentlist.appendChild(card);
     });

});

topbtn.addEventListener("click",()=>{
studentlist.innerHTML="";
 const result= students.filter(num=>num.marks>=80);
result.forEach((student)=>{
         let card=document.createElement("div");
    card.classList.add("student-card");
    let h3=document.createElement("h3");
    h3.textContent=student.name;
    let p=document.createElement("p");
    p.textContent=student.marks;

    card.appendChild(h3);
    card.appendChild(p);
    studentlist.appendChild(card);
     });

});

sortbtn.addEventListener("click",()=>{

    const result=students.sort((a,b)=>{return b.marks-a.marks},0);
     studentlist.innerHTML="";
     result.forEach((student)=>{
         let card=document.createElement("div");
    card.classList.add("student-card");
    let h3=document.createElement("h3");
    h3.textContent=student.name;
    let p=document.createElement("p");
    p.textContent=student.marks;

    card.appendChild(h3);
    card.appendChild(p);
    studentlist.appendChild(card);
     });

});

averagebtn.addEventListener("click",()=>{
 const result=students.reduce((a,student)=>{return a+student.marks},0);
 const avg=result/students.length;
 studentlist.innerHTML="";
 document.getElementById("average").textContent=`Average Marks:${avg.toFixed(2)}`;
});

