let aoo=[{
    name:"rishi",
    age:21,
    city:"bhopal"
},
{
    name:"rishika",
    age:21,
    city:"vidisha"

}]
let show=document.querySelector("#show")
//  let ans=aoo.map((e)=>{
    aoo.map((e)=>{
    // return e.city + e.age
    show.innerHTML+= 
    `<div>
    <h1 id="name">${e.name}</h1>
    <h1>${e.age}</h1>
     <h1>${e.city}</h1>
     </div>`
    show.innerHTML+= 
    `<tr>
    <td id="name">${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
    </tr>`
    
})
console.log(ans)