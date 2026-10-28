function evens(from, to) {
  for (i = from; i <= to; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
evens(1, 10);
evens(15, 20);
