const badge = document.getElementById("badge");
const nameInput = document.getElementById("nameInput");

function makeBadge() {
  const name = nameInput.value;
  badge.textContent = `👋 Намайг ${name} гэдэг`;
}
