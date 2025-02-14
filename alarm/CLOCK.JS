let hello = () => {
    let clock = document.querySelector("#time");
    let date1 = new Date();
    clock.innerHTML = `${date1.getHours().toString().padStart(2, '0')} : ${date1.getMinutes().toString().padStart(2, '0')} : ${date1.getSeconds().toString().padStart(2, '0')}`;
};
setInterval(hello, 1000);

let set = () => {
    let inptime = document.querySelector("#curntime").value; 
    let Show = document.querySelector("#show");
    let music = document.querySelector("#music");

    let inn = setInterval(() => {
        let time = new Date();
        let currentime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

        if (currentime === inptime) {
            Show.innerHTML = "alarm is ringing...";
            music.play();
            
            // Fix: Stop checking once alarm rings
            clearInterval(inn);

            setTimeout(() => {
                music.pause();
                Show.innerHTML = "alarm stopped";
            }, 5000);
        } else {
            Show.innerHTML = "alarm is set";
        }
    }, 5000);
};
