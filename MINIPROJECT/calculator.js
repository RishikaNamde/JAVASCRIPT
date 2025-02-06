let store=""
let cal=(value)=>{
    store=store+value
    let show=document.querySelector("#display")
    show.innerHTML=store
}
let res=()=>{
    let show=document.querySelector("#display")
   show.innerHTML= eval(store)  
   store=eval(store)
   store.toString() 
}

let ac=()=>{
    store=" "
    let show=document.querySelector("#display")
    show.innerHTML=store  
      
}
let del=()=>{
     store=store.slice(0,-1)
    let show=document.querySelector("#display")
    
    show.innerHTML=store
}
let sqr=()=>{
    let show=document.querySelector("#display")
    store=store*store
    show.innerHTML=store
}