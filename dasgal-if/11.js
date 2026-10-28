const result = document.getElementById("result");
const aInput = document.getElementById("aInput");
const bInput = document.getElementById("bInput");
const cInput = document.getElementById("cInput");

function findMax() {
  const a = aInput.value;
  const b = bInput.value;
  const c = cInput.value;

  if (a > b && a > c) {
    result.textContent = "Хамгийн их нь: " + a;
  } else if (b > c && b > c) {
    result.textContent = "Хамгийн их нь: " + b;
  } else {
    result.textContent = "Хамгийн их нь: " + c;
  }
}
