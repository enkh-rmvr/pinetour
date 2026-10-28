const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function nextYear() {
  const age = Number(ageInput.value);
  result.textContent = `Ирэх жил ${age + 1} нас хүрнэ 🎉`;
}
