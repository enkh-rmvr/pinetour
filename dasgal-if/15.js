const count = document.getElementById("count");
const message = document.getElementById("message");
const drinkButton = document.getElementById("drinkButton");
const resetButton = document.getElementById("resetButton");

let countup = Number(0);
const limit = Number(8);
function drink() {
  if (countup < limit) {
    countup++;
    count.textContent = countup + " / 8 аяга";
    message.textContent = "Үргэлжлүүл 💪";
  } else if (countup >= limit) {
    count.textContent = countup + " / 8 аяга";
    message.textContent = "Зорилгодоо хүрлээ 🎉";
  } else if (countup === limit && count()) {
    count.textContent = countup + " / 8 аяга";
    message.textContent = "Хангалттай! Маргааш дахин 🙂";
  }
}
function newDay() {
  countup = 0;
  count.textContent = countup + " / 8 аяга";
  message.textContent = "Өнөөдөр ус уугаарай 💧";
}
