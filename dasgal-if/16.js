const result = document.getElementById("result");
const attempts = document.getElementById("attempts");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
let count = 0;

const code = Number(37);
function check() {
  const guess = Number(guessInput.value);
  if (guess > 100 || guess < 1) {
    result.textContent = "1-ээс 100 хүртэл тоо бич";
  } else if (guess > code) {
    count++;
    attempts.textContent = "Оролдлого: " + count;
    const guess = Number(guessInput.value);
    result.textContent = "Их байна ⬇️";
  } else if (guess < code) {
    count++;
    attempts.textContent = "Оролдлого: " + count;
    const guess = Number(guessInput.value);
    result.textContent = "Бага байна ⬆️";
  } else if (guess === code) {
    count++;
    attempts.textContent = "Оролдлого: " + count;
    const guess = Number(guessInput.value);
    result.textContent = "Зөв! 🎉" + count + " оролдлогоор олсон";
  }
}
