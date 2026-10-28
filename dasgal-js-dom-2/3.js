const title = document.getElementById("title");
const tugrikInput = document.getElementById("tugrikInput");
const usd = document.getElementById("usd");
const cny = document.getElementById("cny");

function exchange() {
  const tugrik = Number(tugrikInput.value);
  const usdd = tugrik * 3500;
  const cnyy = tugrik * 500;

  title.textContent = tugrik + "₮";
  usd.textContent = "$" + usdd;
  cny.textContent = "¥" + cnyy;
}
