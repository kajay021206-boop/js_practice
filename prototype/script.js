function Vehicle(brand,year){
   this.brand=brand;
   this.year=year;
};

Vehicle.prototype.getDetails=function(){
    return `${this.brand} ${this.year}`;
}

Vehicle.prototype.start=function(){
    return `${this.brand} is starting!`;
}

const car1=new Vehicle("Toyota",2023);
const car2=new Vehicle("Tesla",2026);

console.log(car1.getDetails());
console.log(car1.start());

console.log(car2.getDetails());
console.log(car2.start());

console.log(car1 instanceof Vehicle);
console.log(car2 instanceof Vehicle);

console.log(car1.start===car2.start);

const vehicleform=document.getElementById("vehicleForm");
const brand=document.getElementById("brand");
const year=document.getElementById("year");
const list=document.getElementById("vehicleList");

vehicleform.addEventListener("submit",(event)=>{
   event.preventDefault();

   let brandinput=brand.value.trim();
   let yearinput=year.value.trim();
   
   const vehicle=new Vehicle(brandinput,yearinput);

   const emptymessage=list.querySelector(".empty-message");

   if(emptymessage){
    emptymessage.remove();
   }

   const card=document.createElement("div");
   card.classList.add("vehicle-card");
   const heading=document.createElement("h3");
   heading.textContent=vehicle.getDetails();
   const startbutton=document.createElement("button");
   startbutton.textContent="Start Vehicle";
   const message=document.createElement("p");
   message.classList.add("start-message");

   startbutton.addEventListener("click",()=>{
     message.textContent=vehicle.start();
     startbutton.remove();
   });

   card.appendChild(heading);
   card.appendChild(startbutton);
   card.appendChild(message);

   list.appendChild(card);

   vehicleform.reset();



});
