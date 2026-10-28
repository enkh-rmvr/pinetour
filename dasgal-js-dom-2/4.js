const aInput = document.getElementById("aInput");
const bInput = document.getElementById("bInput");
const sum = document.getElementById("sum");
const difference = document.getElementById("difference");
const product = document.getElementById("product");
const quotient = document.getElementById("quotient");

function calculate() {
  const a = Number(aInput.value);
  const b = Number(bInput.value);

  const som = a + b;
  const diff = a - b;
  const prod = a * b;
  const quo = a / b;

  sum.textContent = a + " + " + b + " = " + som;
  difference.textContent = a + " - " + b + " = " + diff;
  product.textContent = a + " * " + b + " = " + prod;
  quotient.textContent = a + " / " + b + " = " + quo;
}
