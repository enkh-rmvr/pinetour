function findAll(items, target) {
  let count = 0;
  for (let i = 0; i <= items.length; i++) {
    if (target[i] === items[i]) {
      count++;
      console.log(count);
      return;
    }
  }
}
findAll(["🍎", "🍌", "🍎", "🍇", "🍎"], "🍎");
findAll(["🍎", "🍌", "🍎", "🍇", "🍎"], "🍇");
findAll(["🍎", "🍌"], "🥝");
