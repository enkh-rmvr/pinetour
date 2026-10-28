const parking = document.getElementById("parking");
const meter = document.getElementById("meter");
const enterButton = document.getElementById("enterButton");
const leaveButton = document.getElementById("leaveButton");
let min = 0;
let pay = 0;
function enter() {
  if (min === 0) {
    timer = setInterval(tick, 1000);
    parking.textContent = "🚗 Зогсоолд байна";
  }
}
function tick() {
  min++;
  pay += 100;
  meter.textContent = `${min} минут · ${pay}₮`;
}
function leave() {
  clearInterval(timer);
  parking.textContent = `🧾 Төлөх: ${pay}`;
}
