const seats = [
  ["🟩", "🟩", "🔴", "🟩"],
  ["🔴", "🟩", "🟩", "🟩"],
  ["🟩", "🟩", "🟩", "🔴"],
];
const row = 1;
const seat = 4;

if (seats[row - 1][seat - 1] === "🔴") {
  console.log(`❌ Эгнээ ${row}, суудал ${seat} захиалагдсан`);
} else {
  console.log(`✅ Эгнээ ${row}, суудал ${seat} сул байна`);
}
