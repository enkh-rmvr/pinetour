const likes = document.getElementById("likes");
count = 0;
function like() {
  count++;
  likes.textContent = `❤️ ${count}`;
}
