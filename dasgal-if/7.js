const result = document.getElementById("result");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

function login() {
  const name = usernameInput.value;
  const pass = passwordInput.value;

  if (name === "admin" && pass === "1234") {
    result.textContent = "Тавтай морил, admin! 👋";
  } else if (name === "admin") {
    result.textContent = "Нууц үг буруу ❌";
  } else if (pass === "1234") {
    result.textContent = "Хэрэглэгч олдсонгүй";
  } else {
    result.textContent = "yuve";
  }
}
