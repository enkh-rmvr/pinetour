const price = Number(prompt("tasalbariin une"));
const tickets = Number(prompt("heden tasalbar zaragdsan"));
const expenses = Number(prompt("niit zardal"));
const revenue = Number(price * tickets);
const netrev = Number(revenue - expenses);
console.log("orlogo: " + revenue);
console.log("ashig: " + netrev);
