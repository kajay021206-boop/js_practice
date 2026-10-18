class Vehicle{
    constructor(brand,year){
        this.brand=brand;
        this.year=year;
    }
    getDetails(){
        return `${this.brand} ${this.year}`;
    }

    start(){
        return `Vehicle is starting`;
    }
}
class Car extends Vehicle{
       constructor(brand,year,model){
        super(brand,year);
        this.model=model;
       }
       getDetails(){
        return `${this.brand} ${this.year} ${this.model}`;
       }
       start(){
        return `${this.brand} ${this.model} engine started!`
       }
}

class Bike extends Vehicle{
    constructor(brand,year,model){
          super(brand,year);
          this.model=model;
    }
    getDetails(){
        return `${this.brand} ${this.year} ${this.model}`;
    }
    start(){
        return  `${this.brand} ${this.model} bike started!`;
    }
}


const form=document.getElementById("vehicleForm");
const brand=document.getElementById("brand");
const year=document.getElementById("year");
const model=document.getElementById("model");
const type=document.getElementById("type");
const list=document.getElementById("vehicleList");
const p=document.querySelector(".empty-message");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
     let brand1=brand.value.trim();
          let brand2=Number(year.value);
               let brand3=model.value.trim();
                    let selected=type.value;



                let Vehicle;

                if(selected==="Car"){
                    const car1=new Car(brand1,brand2,brand3);
                    Vehicle=new Car(brand1,brand2,brand3);
                }
                else if(selected==="Bike"){
                    Vehicle=new Bike(brand1,brand2,brand3);
                }
  
                let div=document.createElement("div");
                   div.classList.add("vehicle-card");
                   
                let h3=document.createElement("h3");
                  h3.textContent=`${Vehicle.brand} ${Vehicle.model}`;
                  const mes = document.createElement("h1");
                const message = document.createElement("p");
    
                  let button=document.createElement("button");
                  button.textContent="Start Vehicle";
                  
                  button.addEventListener("click",()=>{
                    mes.textContent=Vehicle.getDetails();
                     message.textContent=Vehicle.start();
                     button.style.display="none";
                  });

                  div.appendChild(h3);
                  div.appendChild(button);
                  div.appendChild(mes);
                  div.appendChild(message);
                  list.appendChild(div);

              
                  if(p){
                    p.remove();
                  }
                


});



