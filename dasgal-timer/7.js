const hello = document.getElementById("hello");
const mnButton = document.getElementById("mnButton");
const enButton = document.getElementById("enButton");
let helloeng = "Hello! 👋";
let hellomon = "Сайн байна уу! 👋";
let hellomn = localStorage.getItem("hellomon");
let helloen = localStorage.getItem("helloeng");

function chooseMongolian() {
  localStorage.setItem("hellomon", hellomn);
  hello.textContent = hellomon;
}
function chooseEnglish() {
  localStorage.setItem("helloeng", helloen);
  hello.textContent = helloeng;
}
