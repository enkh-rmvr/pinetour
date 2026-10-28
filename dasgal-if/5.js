const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function price() {
  const age = ageInput.value;

  if (age >= 60) {
    result.textContent = "Тасалбар: 3000₮";
  } else if (age >= 18) {
    result.textContent = "Тасалбар: 10000₮";
  } else if (age >= 6) {
    result.textContent = "Тасалбар: 5000₮";
  } else {
    result.textContent = "Тасалбар: Үнэгүй";
  }
}
