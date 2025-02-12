console.log(new Date())  //new:-kyuki hume yeah sb object ki method mai chaiye tha
let date=new Date()
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getMinutes())
let a=["sunday","monday","tuesday","wednesday","thrusday","friday",
    "saturday"]
console.log(a[date.getDay()])
let name = document.querySelector("#name");
let b=a[date.getDay()]
        name.innerHTML=b;