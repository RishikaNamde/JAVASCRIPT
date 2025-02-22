let senddata=()=>{
    localStorage.setItem("name","rishika")
    localStorage.setItem("age","21")
    
    
}
let show=document.querySelector("#show")
show.innerHTML=localStorage.getItem("name")

let remove=()=>
{
    localStorage.removeItem("name")
    location.reload() //can also use clear
}
