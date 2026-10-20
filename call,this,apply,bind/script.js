const employee1={
    name:"Ravi",
    role:"Developer",
    salary:50000,
    showDetails(){
      return `Name:${this.name}
Role:${this.role}
Salary:${this.salary}`;

    }
};

const employee2={
    name:"Priya",
    role:"Designer",
    salary:60000,
    showDetails(){
     return `Name:${this.name}
Role:${this.role}
Salary:${this.salary}`
    }
};

console.log(employee1.showDetails());
console.log(employee2.showDetails());

const ravibtn=document.getElementById("raviBtn");
const priyabtn=document.getElementById("priyaBtn");
const output=document.getElementById("output");
const callbtn=document.getElementById("callBtn");
const applybtn=document.getElementById("applyBtn");
const bindbtn=document.getElementById("bindBtn");
ravibtn.addEventListener("click",()=>{

output.textContent=employee1.showDetails();
    
});

priyabtn.addEventListener("click",()=>{

output.textContent=employee2.showDetails();
    
});

callbtn.addEventListener("click",()=>{

    output.textContent=employee1.showDetails.call(employee2);
});

applybtn.addEventListener("click",()=>{
output.textContent=employee1.showDetails.apply(employee2,[]);
});

bindbtn.addEventListener("click",()=>{
const boundfunction=employee1.showDetails.bind(employee2);
output.textContent=boundfunction();
});

