let prona=document.querySelector(".product");
let pri=document.querySelector(".price");
let list=document.querySelector(".list");
let add=document.querySelector(".add");
let item=document.querySelector(".item")
let total=0;
let cal=document.querySelector(".cal")
let clall=document.querySelector(".clall");
let obj=[];


add.addEventListener("click",function(){

    let product=prona.value.trim();
    let price=pri.value.trim();
     
   if(product===""||price===""){
    alert("Please enter valid information!");
    return;
   }

   

    let numpri=Number(price);



     let card={
      name:product,
      prz:price
    };

    obj.push(card);

    localStorage.setItem("obj",JSON.stringify(obj));

     total=total+numpri;

    let div=document.createElement("div");
    div.className="num";
    let p=document.createElement("p");
    p.textContent=product;
    let h3=document.createElement("h3");
    h3.textContent="₹"+price;
    h3.className="calpr"
    let button=document.createElement("button");
    button.textContent="Remove";
    button.className="rem";

    div.appendChild(p);
    div.appendChild(h3);
    div.appendChild(button);
    list.appendChild(div);

    item.style.display="flex";

    button.addEventListener("click",function(){
       div.remove();
       total = total - numpri;
    cal.textContent = "₹" + total;
    obj = obj.filter(function(product){
            return product !== card;
        });

        localStorage.setItem("obj", JSON.stringify(obj));

    });


     cal.textContent="₹"+total;
     cal.style.color="green";
      
       prona.value="";
       pri.value="";
    
   


    clall.addEventListener("click",function(){
        
      
    list.innerHTML = "";

    obj = [];

    total = 0;

    localStorage.removeItem("obj");

    cal.textContent = "₹0";

    item.style.display = "none";

     });
    
});


