const starthour = Number(prompt("ehleh tsag 0-23"));
const startminute = Number(prompt("ehleh minut"));
const runtime = Number(prompt("kino heden minut"));
const minutes = Number(starthour * 60 + startminute + runtime);
const time = minutes % 1440;
const hours = 1440 % runtime;
console.log(time);
console.log(minutes);
console.log(hours);
