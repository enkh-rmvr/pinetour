const result = document.getElementById("result");
const scoreInput = document.getElementById("scoreInput");

function grade() {
  const score = scoreInput.value;
  if (score >= 90) {
    result.textContent = "Үнэлгээ: A";
  } else if (score >= 80) {
    result.textContent = "Үнэлгээ: B";
  } else if (score >= 70) {
    result.textContent = "Үнэлгээ: C";
  } else if (score >= 60) {
    result.textContent = "Үнэлгээ: D";
  } else {
    result.textContent = "Үнэлгээ: F";
  }
}
