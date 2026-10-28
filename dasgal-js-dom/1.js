const greeting = document.getElementById("greeting");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

function showName() {
  const first = firstName.value;
  const last = lastName.value;
  greeting.textContent = "Сайн уу, " + first + " " + last;
}
