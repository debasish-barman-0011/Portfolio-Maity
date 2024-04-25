const scriptURL = "https://script.google.com/macros/s/AKfycbz7fcTvWD4t-yklehnatERbLhLtQzcfu8xWfAmT3oteDU7vUzF2pTTi5ob7zBQlTJ3Eyg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Query has received by Sayan Maity.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 6000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.getElementById("btnSubmit").addEventListener("click", function() {
  alert("Thank you for reaching out! Click OK to post your message. We'll get back to you as soon as possible.");
});