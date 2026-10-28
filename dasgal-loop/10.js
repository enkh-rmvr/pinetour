for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Бууз Хуушуур");
  } else if (i % 3 === 0) {
    console.log("Бууз");
  } else if (i % 5 === 0) {
    console.log("Хуушуур");
  } else {
    console.log(i);
  }
}
