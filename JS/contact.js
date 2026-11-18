// What it does:
//  1. Counts the characters typed in the message box.
//  2. Turns the Send button on only when the whole form is valid.
//  3. Shows a short status line, and a thank-you note on submit (no real sending).

const form = document.querySelector("#contactForm");
const message = document.querySelector("#message");
const counter = document.querySelector("#msgCount");
const sendBtn = document.querySelector("#sendBtn");
const statusLine = document.querySelector("#formStatus");

function checkForm() {
  // 1. Live character counter
  counter.textContent = message.value.length + " / " + message.maxLength;

  // 2. checkValidity() is true only if every required rule in the HTML passes
  const ready = form.checkValidity();
  sendBtn.disabled = !ready;

  // 3. Status line under the button
  statusLine.textContent = ready
    ? "All set. You can send your message."
    : "Fill in the required fields to enable Send.";
  statusLine.classList.toggle("is-ready", ready);
}

// Run the check on every keystroke or change inside the form
form.addEventListener("input", checkForm);
form.addEventListener("change", checkForm);

// On submit: stop the page from reloading and show a thank-you note
form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.reset();
  checkForm();
  statusLine.textContent =
    "Thank you! This is a mockup, so no message was actually sent.";
  statusLine.classList.add("is-ready");
});

// Run once when the page loads
checkForm();
