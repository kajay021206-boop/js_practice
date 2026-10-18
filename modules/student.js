export function cal(marks){
    if(marks.length===0){
        return "no marks available" ;
    }
  let total=marks.reduce((sum,mark)=>{
       return sum+mark;
  },0);
   
  let ave=total/marks.length;
  return ave;
}