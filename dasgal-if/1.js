const result = document.getElementById("result");
const ageInput = document.getElementById("ageInput");

function check() {
  const age = ageInput.value;
  if (age >= 18) {
    result.textContent = "Насанд хүрсэн ✅";
  } else {
    result.textContent = "Насанд хүрээгүй ❌";
  }
}
