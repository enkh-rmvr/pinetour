const nameInput = document.getElementById("nameInput");
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const thirdInput = document.getElementById("thirdInput");
const cardName = document.getElementById("cardName");
const total = document.getElementById("total");
const average = document.getElementById("average");

function makeCard() {
  const name = nameInput.value;
  const first = Number(firstInput.value);
  const second = Number(secondInput.value);
  const third = Number(thirdInput.value);

  cardName.textContent = name;
  total.textContent = "Нийт: " + first + second + third + "/300";
  average.textContent = "Дундаж: " + (first + second + third) / 3;
}
