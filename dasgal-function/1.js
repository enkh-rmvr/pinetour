function greetByHour(name, hour) {
  if (hour < 12) {
    console.log(`☀️ Өглөөний мэнд, ${name}!`);
  } else if (hour < 18) {
    console.log(`🌤 Өдрийн мэнд, ${name}!`);
  } else {
    console.log(`🌙 Оройн мэнд, ${name}!`);
  }
}

greetByHour("Бат", 9);
greetByHour("Сараа", 14);
greetByHour("Ану", 20);
