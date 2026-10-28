const orderr = document.getElementById("order");
count = 0;
function addBuuz() {
  count++;
  orderr.textContent = `🥟 ${count} бууз · ${count * 1500}₮`;
}
function clearOrder() {
  count = 0;
  orderr.textContent = `🥟 ${count} бууз · ${count * 1500}₮`;
}
