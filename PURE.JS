// let clickme=document.querySelector("#btn")
// clickme.addEventListener("click",()=>{
//     alert("hello")
// })
let clickme=document.querySelector("#btn")
let box1=document.querySelector("#box")
    box1.addEventListener("click",()=>{
        box1.style.backgroundColor="red"

    })
// let inpbox=document.querySelector("#inpbox")
// inpbox.addEventListener("keydown",(e)=>{
//     console.log(e.key);


// })
inpbox.addEventListener("input",()=>{
    console.log(inpbox.value);
})

