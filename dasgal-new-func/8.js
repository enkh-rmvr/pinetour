const queue = ["Бат", "Сараа", "Ану", "Болд"];
const me = "Сараа";

const index = queue.indexOf(me);

if (index !== -1) {
  const number = index + 1;
  const before = index;
  console.log(`🧾 ${me} — дугаар ${number}, өмнө ${beforeCount} хүн`);
} else {
  console.log(`😶 ${me} дараалалд алга`);
}
