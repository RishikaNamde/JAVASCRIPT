let login = (event) => {
    event.preventDefault(); // Prevent form submission

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

    // Show success message
    alert("Login successful! Redirecting to Home page...");

    // Redirect to home page after 1 second
    setTimeout(() => {
        window.location.href = "./home.html"; // Change to your actual home page file
    }, 1000);

    return true;
};

// Attach event listener to the form
document.getElementById("loginForm").addEventListener("submit", login);

// Toggle password visibility
function togglePassword() {
    let passwordInput = document.querySelector("#password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
