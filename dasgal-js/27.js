const zeel = Number(prompt("zeeliin hemjee"));
const sar = Number(prompt("heden sar"));
const interest = Number(prompt("sariin huu huvi"));
const totalinterest = ((zeel * interest) / 100) * sar;
const totalpayment = totalinterest + zeel;
const monthlypayment = totalpayment / sar;
console.log("niit huu: " + totalinterest);
console.log("niit tuluh: " + totalpayment);
console.log("sar bur: " + monthlypayment);
