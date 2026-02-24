document.addEventListener("DOMContentLoaded", function() {


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    //const email = emailInput.value;
    //const password = passwordInput.value;
    //console.log("Email:", email);
    //console.log("Password:", password);

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Enter a valid email";
      isValid = false;
    }

    if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    }

    if (isValid) {
      console.log("Form is valid ✅");
      console.log("Email:", email);
      console.log("Password:", password);
    }

        const loginData = {
          email: email,
          password: password
        };
    console.log("Email:", loginData.email);
      console.log("Password:", loginData.password);

      // redirect to dashboard after success msg
      const successMsg = document.getElementById("successMsg");
      successMsg.textContent = "Login successful! Redirecting...";

      setTimeout(function () {
        // setting user info in local storage so that we can use it in future
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
      }, 1500);
    
});
});



