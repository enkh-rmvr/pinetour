const kettle = document.getElementById("kettle");
let temp = 20;

function turnOn() {
  if (temp === 20) {
    timer = setInterval(tick, 1000);
  }
}
function tick() {
  if (temp < 80) {
    temp += 20;
    kettle.textContent = `☕ ${temp}°`;
  } else {
    kettle.textContent = "☕ 100° — Ус буцлаа! 🔔";
  }
}
