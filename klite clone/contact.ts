const form = document.getElementById("contactForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const messageInput = document.getElementById("message") as HTMLTextAreaElement;
const formStatus = document.getElementById("formStatus") as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

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

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
