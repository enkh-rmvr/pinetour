const classroom = [
  ["Бат", "Сараа", "Ану"], // урд эгнээ
  ["Болд", "Тэмүүлэн", "Нараа"], // арын эгнээ
];

const row = classroom.length;
const seat = classroom[0].length;

const backRight = classroom[row - 1][seat - 1];
const frontMid = classroom[0][1];
console.log(` 🏫 ${row} эгнээ × ${seat} ширээ = ${row * seat} сурагч`);
console.log(`↘️ Хамгийн ард, баруун талд: ${backRight}`);
console.log(`⬆️ Урд эгнээний голд: ${frontMid}`);
