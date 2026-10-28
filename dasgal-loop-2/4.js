const cup = document.getElementById("cup");
const nameInput = document.getElementById("nameInput");
const drinkInput = document.getElementById("drinkInput");

function order() {
  const name = nameInput.value;
  const drink = drinkInput.value;
  cup.textContent = `☕ ${name} - ${drink}`;
}
