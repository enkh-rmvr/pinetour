const result = document.getElementById("result");
const speedInput = document.getElementById("speedInput");
const limitInput = document.getElementById("limitInput");

function check() {
  const speed = Number(speedInput.value);
  const limit = Number(limitInput.value);
  const broke = Number(speed - limit);
  if (speed < limit || speed === limit) {
    result.textContent = "Зөв явж байна ✅";
  } else if (broke <= 10) {
    result.textContent = "Анхааруулга ⚠️ — " + broke + " км/ц хэтэрсэн";
  } else if (broke <= 20) {
    result.textContent = "Торгууль 50000₮ " + broke + " км/ц хэтэрсэн";
  } else if (broke > 20) {
    result.textContent = "Торгууль 100000₮ " + broke + " км/ц хэтэрсэн";
  }
}
