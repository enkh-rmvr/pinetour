const battery = document.getElementById("battery");
const levelInput = document.getElementById("levelInput");
let fullbat = 5;
function buildtrack() {
  battery.textContent = "";
}
function showBattery() {
  level = levelInput.value;
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      battery.textContent += "🟩";
    } else {
      battery.textContent += "⬜";
    }
  }
}
