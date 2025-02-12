let count=0;
let inter;

let cout=()=>{
   let num= document.querySelector("#count")
    inter= setInterval(()=>{
    num.innerHTML=count;
    count++;
   
    
},1000)
}

let stop=()=>
{
    clearInterval(inter)

}

