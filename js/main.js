// CONTACT FORM
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const messageElement = document.getElementById("message");
const buttonElement = document.getElementById("button");
const contactElement = document.querySelector(".contact-form");

buttonElement.addEventListener("click", function (event) {
    if (!nameElement.value || !emailElement.value || !messageElement.value) {
        alert("Please fill in all fields.");
    } else {
        contactElement.innerHTML = "<h2>Thank You!</h2> <p>Your message has been sent.</p>";
    }
});