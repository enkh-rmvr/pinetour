const lamp = document.getElementById("lamp");
count = 0;
function toggleLamp() {
  count++;
  if (count % 2 === 0) {
    lamp.textContent = "💡 Асаалттай";
  } else {
    lamp.textContent = "🌑 Унтарсан";
  }
}
