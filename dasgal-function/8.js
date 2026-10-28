function sumList(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
sumList([1, 2, 3]);
sumList([10, 20, 30, 40]);
sumList([]);
