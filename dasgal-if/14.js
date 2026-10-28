const result = document.getElementById("result");
const fuelInput = document.getElementById("fuelInput");
const useInput = document.getElementById("useInput");
const distanceInput = document.getElementById("distanceInput");

function check() {
  const fuel = Number(fuelInput.value);
  const use = Number(useInput.value);
  const distance = Number(distanceInput.value);

  const needed = (distance * use) / 100;
  const leftover = fuel - needed;
  const missing = needed - fuel;

  if (fuel >= needed) {
    result.textContent = "Хүрнэ ✅ — " + leftover + "л үлдэнэ";
  } else if (fuel < needed) {
    result.textContent = "Хүрэхгүй ❌ - " + missing + "л дутна";
  }
}
