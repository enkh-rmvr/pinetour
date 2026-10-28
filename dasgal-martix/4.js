const names = ["Бат", "Сараа", "Ану"];
const steps = [
  [8000, 6500, 10000],
  [12000, 9000, 7000],
  [5000, 4000, 6000],
];
const total1 = steps[0][0] + steps[0][1] + steps[0][2];
const total2 = steps[1][0] + steps[1][1] + steps[1][2];
const total3 = steps[2][0] + steps[2][1] + steps[2][2];
console.log(`${names[0]}: ${total1}`);
console.log(`${names[1]}: ${total2}`);
console.log(`${names[2]}: ${total3}`);
