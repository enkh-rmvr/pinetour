const result = document.getElementById("result");
const dayInput = document.getElementById("dayInput");

function checkDay() {
  const day = dayInput.value;
  if (day >= 8) {
    result.textContent = "1-ээс 7 хүртэл тоо бич";
  } else if (day >= 6) {
    result.textContent = "Амралтын өдөр 🎉";
  } else if (day >= 1) {
    result.textContent = "Ажлын өдөр 💼";
  } else {
    result.textContent = "zail";
  }
}
