const title = document.getElementById("title");
const numberInput = document.getElementById("numberInput");
const square = document.getElementById("square");
const cube = document.getElementById("cube");

function calculate() {
  const num = Number(numberInput.value);
  const squaree = num * num;
  const cubee = num * num * num;

  title.textContent = "Тоо: " + num;
  square.textContent = "Квадрат: " + squaree;
  cube.textContent = "Куб: " + cubee;
}
