function stars(count) {
  let final = "";

  for (let i = 0; i < count; i++) {
    final += "⭐";
  }
  console.log(final);
}

stars(3);
stars(5);
stars(1);
