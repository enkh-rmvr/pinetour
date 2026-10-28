const subjects = ["Мат", "Физ", "Англи"];
const scores = [
  [90, 80, 70], // Бат
  [60, 95, 86], // Сараа
  [75, 65, 99], // Ану
];

for (let r = 0; r < scores.length; r++) {
  let sum = 0;
  for (let c = 0; c < scores[r].length; c++) {
    sum += scores[c][r];
  }

  const average = sum / scores.length;
  console.log(`${subjects[r]}: ${average}`);
}
