let login = (event) => {
    event.preventDefault(); 
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

    // Store user login status
    localStorage.setItem("loggedInUser", inpemail.value.trim());

    // Show success message using SweetAlert
    Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Redirecting to Booking Page...",
        timer: 1500,
        showConfirmButton: false
    });

    // Redirect to booking page after 1.5 seconds
    setTimeout(() => {
        window.location.href = "booknow.html";  // Redirecting to booking page
    }, 1600);

    return true;
};

// Attach event listener to the form
document.getElementById("loginForm").addEventListener("submit", login);

// Toggle password visibility
function togglePassword() {
    let passwordInput = document.querySelector("#password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
