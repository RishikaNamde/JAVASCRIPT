let btn = () => {
    let input = document.querySelector("#hello");
    let number = parseInt(input.value, 10);


    let interval = setInterval(() => 
        {
        input.value = number--;
        if (number < 0) 
            clearInterval(interval);
    }, 1000);
}; 
//take in the h1 tag
