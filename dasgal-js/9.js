const howManyMin = Number(prompt("heden minute"));
const minutes = Number(howManyMin % 60);
const hours = Number((howManyMin - minutes) / 60);
alert(hours + " tsag " + minutes + " minute");
