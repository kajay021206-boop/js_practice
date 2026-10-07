let expense=document.querySelector(".expense");
let amount=document.querySelector(".amount");
let add=document.querySelector(".add");
let list=document.querySelector(".list");
let tot=document.querySelector(".tot");
let rem=document.querySelector(".rem");
let cash=0;
let expences=[]


//add button
add.addEventListener("click",function(){

  let expname=expense.value.trim();
  let amo=Number(amount.value.trim());


  //local storage
  let set={
    names:expname,
    amounts:amo
  };

  expences.push(set);

let seted=JSON.stringify(expences)

  localStorage.setItem("added",seted);

  let take=JSON.parse( localStorage.getItem("added"))

  console.log(take);


  let div=document.createElement("div");
  div.className="item";
  let p=document.createElement("p");
  p.textContent=expname;
  let h3=document.createElement("h3");
  h3.textContent=amo;
  let del=document.createElement("button");
  del.textContent="⨉";

  div.appendChild(p);
  div.appendChild(h3);
  div.appendChild(del);
  list.appendChild(div);
  expense.value="";
  amount.value="";



  //delete element in list only
 del.addEventListener("click", function(){
     div.remove();
     cash=cash-amo;
     tot.textContent=cash;
     
 })

 
 cash=cash+amo;

tot.textContent=cash;

});
