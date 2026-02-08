document.addEventListener("DOMContentLoaded", function() {


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    console.log("Email:", email);
    console.log("Password:", password);

});
});



