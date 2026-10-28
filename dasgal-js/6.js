const baraaniiUne = Number(prompt("baraani une?"));
const hyamdral = Number(prompt("heden huvi hyamdarsan?"));
const hyamdrall = Number(baraaniiUne * hyamdral) / 100;
const tuluh = Number(baraaniiUne - hyamdrall);
console.log("hyamdral: " + hyamdrall);
console.log("tuluh: " + tuluh);
