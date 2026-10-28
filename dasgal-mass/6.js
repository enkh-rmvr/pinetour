const days = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
const temps = [-12, -18, -25, -9, -15];
let coldest = 0;
for (i = 0; i < temps.length; i++) {
  if (temps[i] < temps[coldest]) {
    coldest = i;
  }
}
console.log(days[coldest], temps[coldest]);
