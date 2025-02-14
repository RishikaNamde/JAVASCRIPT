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

//=======================================HOMEWORK===================================================
        //  age calculator:-input:enter you birth getFullYear    today year-birth year
        // a button which shows you are this year old
        // function calculateAge() {
        //     let birth = document.getElementById("birth").value;
        //     let currentYear = new Date().getFullYear();
        //     let age = currentYear - birth;
        //         document.getElementById("ageDisplay").innerText = `Age: ${age}`;
        //     }
        
           let hello=()=>{
            let clock=document.querySelector("#time")
            let date1=new Date()
            clock.innerHTML=`${date1.getHours()} : ${date1.getMinutes()} : ${date1.getSeconds()}`}
            // let time=()=>{
            //     let a=new Data()
            //     let display=document.querySelector("#h1")
            // b=a.toLocalTimeString();
            // display.innerHTML=b;
            // }
            // setInterval(time,1000)
            // setInterval(()=>{
            //     let a=new Data()
            //     let display = document.querySelector("#h1")
                b=a.toLocaleString;
            //     display.innerHTML=b;
            
            // },1000
        // 
        setInterval(hello,1000)
          
        
            
            
        
        

