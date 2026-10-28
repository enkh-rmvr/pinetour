const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

function calculate() {
  const first = Number(a.value);
  const second = Number(b.value);

  result.textContent = first * second;
}
