function attendance(names, present) {
  let count = 0;

  for (let i = 0; i < names.length; i++) {
    if (present[i]) {
      console.log(`present: ${names[i]}`);
      count++;
    } else {
      console.log(`not present: ${names[i]}`);
    }
  }

  console.log(`Ирц: ${count} / ${names.length}`);
}
attendance(["Бат", "Сараа", "Ану", "Болд"], [true, false, true, true]);
