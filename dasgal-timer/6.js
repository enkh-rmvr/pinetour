const water = document.getElementById("water");
const drinkButton = document.getElementById("drinkButton");
const newDayButton = document.getElementById("newDayButton");
let drankk = Number(localStorage.getItem("drank"));
water.textContent = `💧 ${drankk} / 8 аяга`;
function drink() {
  if (drankk <= 7) {
    drankk++;
    water.textContent = `💧 ${drankk} / 8 аяга`;
  } else if (drankk === 8) {
    water.textContent = `🔄	🎉 8 / 8 — өнөөдрийн зорилго биеллээ!`;
  }
  localStorage.setItem("drank", drankk);
}
function newDay() {
  drankk = 0;
  water.textContent = `💧 ${drankk} / 8 аяга`;
}
