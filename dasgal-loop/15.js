let sum = 0;
let sumodd = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  } else {
    sumodd = sumodd + i;
  }
}
console.log(`tegsh toonii niilber ${sum}`);
console.log(`sondgoi toonii niilber ${sumodd}`);
