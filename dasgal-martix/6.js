const hall = [
  ["🔴", "🟩", "🔴", "🟩", "🟩"],
  ["🔴", "🔴", "🔴", "🟩", "🟩"],
  ["🟩", "🟩", "🟩", "🟩", "🔴"],
];
let free = 0;
let occupied = 0;
let row1 = 0;
for (let r = 0; r < hall.length; r++) {
  if (hall[r] === "🔴") {
    row1++;
  }
  for (let c = 0; c < hall[r].length; c++) {
    if (hall[r][c] === "🔴") {
      occupied++;
    } else {
      free++;
    }
  }
}
console.log(` 🎟 Нийт ${occupied} · сул ${free}`);
console.log(row1);
