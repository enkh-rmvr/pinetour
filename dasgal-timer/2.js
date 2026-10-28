const copyButton = document.getElementById("copyButton");

function timer() {
  copyButton.textContent = "📋 Хуулах";
}

function copyCode() {
  copyButton.textContent = "✅ Хуулагдлаа";
  setTimeout(timer, 2000);
}
