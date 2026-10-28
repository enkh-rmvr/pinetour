const urname = document.getElementById("urname");
const name = document.getElementById("name");

function savename() {
  const savename = name.value;
  urname.textContent = "wassup " + savename;
}
