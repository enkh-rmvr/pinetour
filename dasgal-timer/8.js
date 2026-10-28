const status = document.getElementById("status");
const taps = document.getElementById("taps");
const best = document.getElementById("best");
const startButton = document.getElementById("startButton");
const tapButton = document.getElementById("tapButton");
let tapcount = 0;
function startGame() {
  setTimeout(endgame, 5000);
}
function tap() {
  tapcount++;
  taps.textContent = `👆 ${tapcount}`;
}
function endgame() {
  tapButton.disabled = true;
  best.textContent = `🏆 Рекорд: ${tapcount}`;
}
