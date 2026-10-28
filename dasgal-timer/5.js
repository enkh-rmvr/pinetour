const inbox = document.getElementById("inbox");
const newButton = document.getElementById("newButton");
const readButton = document.getElementById("readButton");
const bell = new Audio("ding.wav");
let msg = 0;
function newMessage() {
  msg++;
  bell.currentTime = 0;
  bell.play();
  inbox.textContent = `🔔 ${msg} шинэ мессеж`;
}
function readAll() {
  msg = 0;
  inbox.textContent = `👀	📭 Шинэ мессеж алга`;
}
