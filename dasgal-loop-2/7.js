const volume = document.getElementById("volume");
count = 5;
function volumeDown() {
  count--;
  volume.textContent = `🔊 ${count}`;
}
function volumeUp() {
  count++;
  volume.textContent = `🔊 ${count}`;
}
