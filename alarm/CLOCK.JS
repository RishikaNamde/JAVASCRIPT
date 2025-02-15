let hello = () => {
    let clock = document.querySelector("#time");
    let date1 = new Date();
    clock.innerHTML = `${date1.getHours().toString().padStart(2, '0')} : ${date1.getMinutes().toString().padStart(2, '0')} : ${date1.getSeconds().toString().padStart(2, '0')}`;
};
setInterval(hello, 1000);

let alarmInterval; 

let set = () => {
    let inptime = document.querySelector("#curntime").value; 
    let Show = document.querySelector("#show");
    let music = document.querySelector("#music");

    // if (!inptime) {
    //     Show.innerHTML = "Please enter a valid time!";
    //     return;
    // }

    
    // if (alarmInterval) {
    //     clearInterval(alarmInterval);
    // }

    Show.innerHTML = "Alarm is set for " + inptime;

    alarmInterval = setInterval(() => {
        let time = new Date();
        let currentime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

        if (currentime === inptime) {
            Show.innerHTML = "Alarm is ringing...";
            music.play();

            clearInterval(alarmInterval);

            setTimeout(() => {
                music.pause();
                music.currentTime = 0;
                Show.innerHTML = "Alarm stopped";
            }, 5000);
        }
    }, 1000);
};
