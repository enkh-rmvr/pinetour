const pixels = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

for (let i = 0; i < pixels.length; i++) {
  let line = "";
  for (let j = 0; j < pixels[i].length; j++) {
    if (pixels[i][j] === 1) {
      line += "🟥";
    } else {
      line += "⬜";
    }
  }
  console.log(line);
}
