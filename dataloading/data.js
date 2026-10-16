let p=document.getElementById("status");
let loade=document.getElementById("load-btn");
let data=document.getElementById("data-box");
let ret=document.getElementById("retry-btn");



function fetchbata(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const sucess=Math.random>0.5;
             
            if(sucess){
                resolve("🎉 Data loaded successfully!");
            }
            else{
                reject("❌ Failed to load data. Please try again!");  
            }

        },2000);
    });
}


async function loadata(){
    p.textContent="⏳ Loading...";
    data.textContent="";

    ret.hidden=true;

    loade.display=true;
    ret.display=true;


    try{
        const result=await fetchbata();

        p.textContent="✅ Success"
        data.textContent=result;
    }
    catch(error){
        p.textContent="⚠️ Something went wrong!";
        data.textContent=error;
        ret.hidden=false;
    }
    finally{
        loade.display=false;
        ret.display=false;
    }
}

loade.addEventListener("click",loadata);

ret.addEventListener("click",loadata);