const each = document.getElementById("each");
const billInput = document.getElementById("billInput");
const tipInput = document.getElementById("tipInput");
const peopleInput = document.getElementById("peopleInput");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

function split() {
  const bill = Number(billInput.value);
  const tipin = Number(tipInput.value);
  const people = Number(peopleInput.value);
  const tipip = Number(tipin / 100);
  const tipfinal = Number(bill * tipip);
  const final = Number(bill + tipfinal);
  const per = Number(final / people);

  each.textContent = "Нэг хүн: " + per;
  tip.textContent = "гарын мөнгө: " + tipfinal;
  total.textContent = "Нийт: " + final;
}
