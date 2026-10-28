const cost = document.getElementById("cost");
const lengthInput = document.getElementById("lengthInput");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const priceInput = document.getElementById("priceInput");
const wallArea = document.getElementById("wallArea");
const floorArea = document.getElementById("floorArea");

function calculate() {
  const length = Number(lengthInput.value);
  const width = Number(widthInput.value);
  const height = Number(heightInput.value);
  const price = Number(priceInput.value);

  const floorA = Number(width * length);
  const wallA = Number(2 * (length + width) * height);
  const paintprice = Number(price * wallA);

  cost.textContent = "Будгийн үнэ: " + paintprice;
  wallArea.textContent = "Хнын талабай: " + wallA;
  floorArea.textContent = "Шалны талбай: " + floorA;
}
