let sub = () => {
  let inpname = document.querySelector("#name").value;
  let inpnum = document.querySelector("#number").value;
  let inpemail = document.querySelector("#email").value;
  let inppass = document.querySelector("#password").value;
  let inpcpass = document.querySelector("#cnpass").value;

  let errorname = document.querySelector("#errorname");
  let errornum = document.querySelector("#errornum");
  let erroremail = document.querySelector("#erroremail");
  let errorpass = document.querySelector("#errorpass");
  let errorcnpass = document.querySelector("#errorcnpass");

  // Name validation
  if (inpname == "") {
    let inpnameField = document.querySelector("#name");
    inpnameField.placeholder = "Please enter your name";
    inpnameField.style.border = "2px solid red";
    errorname.innerHTML = "Please enter your name";
    errorname.style.color = "red";
    return false;
  }

  // Number validation
  if (inpnum == "") {
    errornum.innerHTML = "Please fill the contact no. field";
    errornum.style.color = "blue";
    return false;
  }
  if (isNaN(inpnum)) {
    errornum.innerHTML = "Please enter numbers only";
    errornum.style.color = "darkblue";
    return false;
  }
  if (inpnum.length !== 10) {
    errornum.innerHTML = "Please enter a 10-digit number only";
    errornum.style.color = "red";
    return false;
  }

  // Email validation
  if (inpemail == "") {
    erroremail.innerHTML = "Please enter the email";
    erroremail.style.color = "green";
    return false;
  }
  if (!inpemail.includes("@") || !inpemail.includes(".com")) {
    erroremail.innerHTML = "Please enter a valid email";
    erroremail.style.color = "red";
    return false;
  }

  // Password validation
  if (inppass == "") {
    errorpass.innerHTML = "Please enter the password";
    errorpass.style.color = "purple";
    return false;
  }

  // Confirm Password validation
  if (inpcpass == "") {
    errorcnpass.innerHTML = "Please confirm the password";
    errorcnpass.style.color = "brown";
    return false;
  }
  if (inppass !== inpcpass) {
    errorcnpass.innerHTML = "Confirm password is incorrect";
    errorcnpass.style.color = "red";
    document.querySelector("#cnpass").value = "";
    document.querySelector("#cnpass").focus();
    return false;
  }

  // Strong password check
  if (
    !inppass.match(/[0-9]/) ||
    !inppass.match(/[!@#$%^*~\-]/) ||
    !inppass.match(/[a-z]/) ||
    !inppass.match(/[A-Z]/)
  ) {
    errorpass.innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    errorpass.style.color = "red";
    return false;
  }

  return true; 
};
