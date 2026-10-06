let texts=document.getElementById("text");
let save=document.querySelector(".save");
let clear=document.querySelector(".clear");
let here=document.querySelector(".here");
let show=document.querySelector(".show");
  

let saved=localStorage.getItem("note");

if(saved){
      let div=document.createElement("div");
      div.className="here";
      let p=document.createElement("p");
      p.textContent=saved;

      div.appendChild(p);
      show.appendChild(div);
      show.style.display="flex";


        clear.addEventListener("click",function(){
              div.remove();
            localStorage.removeItem("note");
       });
}

//save button
save.addEventListener("click",function(){
    let te=texts.value.trim();
    
     localStorage.setItem("note",te);


    let div=document.createElement("div");
          div.className="here";
          let p=document.createElement("p");
          p.textContent=te;

          div.appendChild(p);
          show.appendChild(div);

          texts.value="";
          show.style.display="flex";


          //clear button
          clear.addEventListener("click",function(){
              div.remove();
            localStorage.removeItem("note");
       });
});


