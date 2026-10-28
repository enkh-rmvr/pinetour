const second = Number(prompt("heden second"));
const a = Number(second % 60);
const b = Number((second - a) / 60);
const c = Number(b % 60);
const d = Number((b - c) / 60);
console.log(d + " tsag " + c + " minut " + a + " second");
