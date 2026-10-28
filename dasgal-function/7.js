function countDivisible(n, d) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % d === 0) {
      count++;
    }
  }
  console.log(`huvaagch ${d}: 1-${n} hoorond ${count}`);
}
countDivisible(20, 3);
countDivisible(100, 7);
countDivisible(5, 6);
