var form = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var formStatus = document.getElementById("formStatus");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
        return;
    }
    if (!validateEmail(email)) {
        formStatus.textContent = "Please enter a valid email.";
        formStatus.style.color = "red";
        return;
    }
    // Success – in a real app, you'd POST this data to a server
    formStatus.textContent = "Thank you for contacting us!";
    formStatus.style.color = "green";
    form.reset();
});
function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
