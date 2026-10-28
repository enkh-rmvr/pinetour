const threedig = Number(prompt("gurvan orontoi too"));
const negj = threedig % 10;
const aravone = threedig % 100;
const arav = (aravone - negj) / 10;
const zuu = (threedig - aravone) / 100;
const reverse = negj * 100 + arav * 10 + zuu;
console.log(threedig + "->" + reverse);
