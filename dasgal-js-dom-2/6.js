const total = document.getElementById("total");
const kmInput = document.getElementById("kmInput");
const waitInput = document.getElementById("waitInput");
const distanceCost = document.getElementById("distanceCost");
const waitCost = document.getElementById("waitCost");

function calculate() {
  const km = Number(kmInput.value);
  const wait = Number(waitInput.value);

  const dist = km * 1500;
  const waitt = wait * 200;
  const tote = dist + waitt + 3000;

  total.textContent = "Нийт: " + tote;
  distanceCost = "Зам: " + dist;
  waitCost.textContent = "Хүлээлт: " + waitt;
}
