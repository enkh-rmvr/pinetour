const result = document.getElementById("result");
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");

function calculate() {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  const heightreal = height / 100;
  const bmi = weight / (heightreal * heightreal);
  console.log(bmi);

  if (bmi >= 30) {
    result.textContent = "Үр дүн: Таргалалт";
  } else if (bmi >= 25) {
    result.textContent = "Үр дүн: Илүүдэл жинтэй";
  } else if (bmi >= 18.5) {
    result.textContent = "Үр дүн: Хэвийн";
  } else {
    result.textContent = "Үр дүн: Тураалтай";
  }
}
