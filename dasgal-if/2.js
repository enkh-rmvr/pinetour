const result = document.getElementById("result");
const passwordInput = document.getElementById("passwordInput");

function login() {
  let password = passwordInput.value;
  if (password == "pinecone") {
    result.textContent = "Нэвтэрлээ 🎉";
  } else {
    result.textContent = "Нууц үг буруу ❌";
  }
}
