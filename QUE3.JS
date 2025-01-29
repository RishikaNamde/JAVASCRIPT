function toggle() {
    let div = document.getElementById("toggleDiv");
    let button = document.getElementById("toggleButton");
    
    if (div.style.display == "none") {
        div.style.display = "block";
        button.textContent = "Hide";
    } else {
        div.style.display = "none";
        button.textContent = "Show";
    }
}