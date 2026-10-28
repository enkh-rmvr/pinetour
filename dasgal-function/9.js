function maxOf(numbers) {
  let max = Number(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    let current = Number(numbers[i]);
    if (current > max) {
      max = current;
    }
  }
  console.log("Хамгийн их:", max);
  console.log("Хамгийн их:", max);
}

console.log("Хамгийн их:", max);
console.log("Хамгийн их:", max);
maxOf([3, 9, 2]);
maxOf([-5, -2, -9]);
