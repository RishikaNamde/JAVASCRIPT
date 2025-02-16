let login = () => {
    let inpemail = document.querySelector("#email");
    let inppass = document.querySelector("#password");

    let erroremail = document.querySelector("#erroremail");
    let errorpass = document.querySelector("#errorpass");

    let isValid = true;

    let shakeInput = (inputField) => {
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 300);
    };

    // Email validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(inpemail.value.trim())) {
        erroremail.innerHTML = "Please enter a valid email";
        inpemail.style.border = "2px solid red";
        shakeInput(inpemail);
        isValid = false;
    } else {
        erroremail.innerHTML = "";
        inpemail.style.border = "1px solid #ccc";
    }

    // Password validation
    if (inppass.value.trim() === "") {
        errorpass.innerHTML = "Please enter the password";
        inppass.style.border = "2px solid red";
        shakeInput(inppass);
        isValid = false;
    } else {
        errorpass.innerHTML = "";
        inppass.style.border = "1px solid #ccc";
    }

    if (!isValid) return false;

    alert("Login successful!");
    return true;
};

// Prevent form submission if validation fails
document.getElementById("loginForm").addEventListener("submit", function(event) {
    if (!login()) {
        event.preventDefault();
    }
});

// Toggle password visibility
function togglePassword() {
    let passwordInput = document.querySelector("#password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
