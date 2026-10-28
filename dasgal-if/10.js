const result = document.getElementById("result");
const aInput = document.getElementById("aInput");
const bInput = document.getElementById("bInput");
const cInput = document.getElementById("cInput");

function checkTriangle() {
  const a = Number(aInput.value);
  const b = Number(bInput.value);
  const c = Number(cInput.value);

  if ((a === b) === c) {
    result.textContent = "Адил талт";
  } else if (a === b) {
    result.textContent = "Адил хажуут";
  } else if (a === c) {
    result.textContent = "Адил хажуут";
  } else if (b === c) {
    result.textContent = "Адил хажуут";
  } else if (a + b < c) {
    result.textContent = "Гурвалжин үүсэхгүй ❌";
  } else if (a + c < b) {
    result.textContent = "Гурвалжин үүсэхгүй ❌";
  } else if (b + c < a) {
    result.textContent = "Гурвалжин үүсэхгүй ❌";
  } else {
    result.textContent = "Энгийн гурвалжин";
  }
}
