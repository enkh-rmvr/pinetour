const statuss = document.getElementById("status");

function timer() {
  statuss.textContent = "✅ Илгээгдлээ";
}
function sendMessage() {
  statuss.textContent = "⏳ Илгээж байна…";
  setTimeout(timer, 3000);
}
