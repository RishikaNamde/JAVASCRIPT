let sub = () => {
    let inpname = document.querySelector("#full-name");
    let inpemail = document.querySelector("#email");
    let inpphone = document.querySelector("#phone");
    let inppass = document.querySelector("#password");
    let inpcpass = document.querySelector("#confirm-password");

    let errorname = document.querySelector("#errorname");
    let erroremail = document.querySelector("#erroremail");
    let errorphone = document.querySelector("#errorphone");
    let errorpass = document.querySelector("#errorpass");
    let errorcnpass = document.querySelector("#errorcnpass");

    let isValid = true;

    // Function to shake input fields on error
    let shakeInput = (inputField) => {
        inputField.classList.add("shake");
        setTimeout(() => inputField.classList.remove("shake"), 300);
    };

    // Name validation
    if (inpname.value.trim() === "") {
        errorname.innerHTML = "Please enter your full name";
        inpname.style.border = "2px solid red";
        shakeInput(inpname);
        isValid = false;
    } else {
        errorname.innerHTML = "";
        inpname.style.border = "1px solid #ccc";
    }

    // Email validation with regex
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

    // Contact Number validation (must be 10 digits)
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(inpphone.value.trim())) {
        errorphone.innerHTML = "Please enter a valid 10-digit phone number";
        inpphone.style.border = "2px solid red";
        shakeInput(inpphone);
        isValid = false;
    } else {
        errorphone.innerHTML = "";
        inpphone.style.border = "1px solid #ccc";
    }

    // Password validation (minimum 8 characters + strong password check)
    if (inppass.value.trim().length < 8) {
        errorpass.innerHTML = "Password must be at least 8 characters long";
        inppass.style.border = "2px solid red";
        shakeInput(inppass);
        isValid = false;
    } else if (!/[0-9]/.test(inppass.value) || 
               !/[!@#$%^&*()_\-+=]/.test(inppass.value) || 
               !/[a-z]/.test(inppass.value) || 
               !/[A-Z]/.test(inppass.value)) {
        errorpass.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        inppass.style.border = "2px solid red";
        shakeInput(inppass);
        isValid = false;
    } else {
        errorpass.innerHTML = "";
        inppass.style.border = "1px solid #ccc";
    }

    // Confirm Password validation
    if (inpcpass.value.trim() === "") {
        errorcnpass.innerHTML = "Please confirm your password";
        inpcpass.style.border = "2px solid red";
        shakeInput(inpcpass);
        isValid = false;
    } else if (inpcpass.value !== inppass.value) {
        errorcnpass.innerHTML = "Passwords do not match";
        inpcpass.style.border = "2px solid red";
        shakeInput(inpcpass);
        isValid = false;
    } else {
        errorcnpass.innerHTML = "";
        inpcpass.style.border = "1px solid #ccc";
    }

    if (!isValid) return false;

    alert("Sign-up successful!");
    return true;
};

// Prevent form submission if validation fails
document.getElementById("signup-form").addEventListener("submit", function(event) {
    if (!sub()) {
        event.preventDefault();
    }
});
