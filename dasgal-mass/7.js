const votes = ["Бат", "Сараа", "Бат", "Ану", "Бат", "Сараа", "Ану", "Бат"];
let count = 0;
for (let i = 0; i < votes.length; i++) {
  if (votes[i] === "Бат") {
    count++;
  }
}
console.log(count);
console.log(votes.length);
