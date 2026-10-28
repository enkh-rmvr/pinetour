const template = "Сайн уу, {name}! Таны захиалга {time}-д бэлэн болно.";
const name = "Бат";
const time = "14:30";

const result = template.replace("{name}", name).replace("{time}", time);
console.log(result);
