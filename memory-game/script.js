const cards = [
  "🐶",
  "🐸",
  "🦊",
  "🐱",
  "🐼",
  "🐶",
  "🐵",
  "🦊",
  "🐱",
  "🐵",
  "🐸",
  "🐼",
];
let score = 0;
let first = null;
let second = null;
function flip(index) {
  if (first === null) {
    const cardss = document.getElementById("card" + index);
    cardss.textContent = cards[index];
    first = cards[index];
    return;
  }
  if (second === null) {
    const cardss = document.getElementById("card" + index);
    cardss.textContent = cards[index];
    second = cards[index];
  }
  if (first === second) {
    const info = document.getElementById("info");
    score++;
    first = null;
    second = null;
    info.textContent = `Олсон хос: ${score} / 6`;
  } else {
    const firstCard = document.getElementById("cards" + first);
    const secondCard = document.getElementById("cards" + second);
    firstCard.textContent = "❓";
    secondCard.textContent = "❓";
  }
  if (score === 6) {
    info.textContent = `Олсон хос: ${score} / 6 🎉`;
  }
  console.log(first, second);
}
