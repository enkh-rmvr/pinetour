const nameInput = document.getElementById("nameInput");
const yearInput = document.getElementById("yearInput");
const cardName = document.getElementById("cardName");
const cardAge = document.getElementById("cardAge");

function updateCard() {
  const name = nameInput.value;
  const year = yearInput.value;
  const age = Number(2026 - year);
  cardName.textContent = name;
  cardAge.textContent = age;
}
