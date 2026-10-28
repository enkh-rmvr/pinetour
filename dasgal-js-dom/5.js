const nameInput = document.getElementById("nameInput");
const wageInput = document.getElementById("wageInput");
const hoursInput = document.getElementById("hoursInput");
const daysInput = document.getElementById("daysInput");
const taxInput = document.getElementById("taxInput");
const slipName = document.getElementById("slipName");
const gross = document.getElementById("gross");
const tax = document.getElementById("tax");
const net = document.getElementById("net");

function makeSlip() {
  const name = nameInput.value;
  const wage = Number(wageInput.value);
  const hours = Number(hoursInput.value);
  const days = Number(daysInput.value);
  const taxI = Number(taxInput.value);

  const totalwage = Number(wage * hours * days);
  const taxT = Number(taxI / 100);
  const totalTax = Number(totalwage * taxT);
  const afterTax = Number(totalwage - totalTax);

  slipName.textContent = name;
  gross.textContent = "Нийт цалин: " + totalwage;
  tax.textContent = "Татвар: " + totalTax;
  net.textContent = "Гарт олгох: " + afterTax;
}
