const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const placeInput = document.getElementById("placeInput");
const guest = document.getElementById("guest");
const date = document.getElementById("date");
const place = document.getElementById("place");

function makeInvite() {
  const name = nameInput.value;
  const datee = dateInput.value;
  const placee = placeInput.value;

  guest.textContent = "Хүндэт " + name + " танаа";
  date.textContent = "Огноо: " + datee;
  place.textContent = "Байршил: " + placee;
}
