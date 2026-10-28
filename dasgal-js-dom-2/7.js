const moneyInput = document.getElementById("moneyInput");
const rateInput = document.getElementById("rateInput");
const interest = document.getElementById("interest");
const after = document.getElementById("after");
const monthly = document.getElementById("monthly");

function calculate() {
  const money = Number(moneyInput.value);
  const rate = Number(rateInput.value);

  const int = rate / 100;
  const intreal = money * int;
  const oneyear = money + intreal;
  const month = intreal / 12;

  interest.textContent = "Жилийн хүү: " + intreal;
  after.textContent = "1 жилийн дараа: " + oneyear;
  monthly.textContent = "Сард дунджаар: " + month;
}
