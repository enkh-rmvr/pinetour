const result = document.getElementById("result");
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");

function compare() {
  const first = Number(firstInput.value);
  const second = Number(secondInput.value);
  if (first > second) {
    result.textContent = "Их нь: " + first;
  } else if (second > first) {
    result.textContent = "Их нь: " + second;
  } else if (first === second) {
    result.textContent = "tentsuu";
  }
}
