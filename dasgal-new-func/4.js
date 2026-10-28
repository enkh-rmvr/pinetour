const fullName = "сараа болд";
const words = fullName.split(" ");

const firstInitial = words[0][0].toUpperCase() + ".";
const secondInitial = words[1][0].toUpperCase() + ".";

const result = firstInitial + secondInitial;

console.log(result);
