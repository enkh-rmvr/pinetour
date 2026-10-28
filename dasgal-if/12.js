const result = document.getElementById("result");
const monthInput = document.getElementById("monthInput");

function findSeason() {
  const month = Number(monthInput.value);
  if (month >= 13 || month < 1) {
    result.textContent = "	1-ээс 12 хүртэл тоо бич";
  } else if (month === 12 || month === 1 || month === 2) {
    result.textContent = "Өвөл ❄️";
  } else if (month >= 9) {
    result.textContent = "Намар 🍂";
  } else if (month >= 6) {
    result.textContent = "Зун ☀️";
  } else if (month >= 3) {
    result.textContent = "Хавар 🌱";
  }
}
