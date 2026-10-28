const threedig = Number(prompt("gurvan orontoi too"));
const negj = threedig % 10;
const aravone = threedig % 100;
const arav = (aravone - negj) / 10;
const zuu = (threedig - aravone) / 100;
console.log(
  zuu + " + " + arav + " + " + negj + " = " + Number(zuu + arav + negj),
);
