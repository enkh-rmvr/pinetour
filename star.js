let line = document.getElementById("line");
let counttext = document.getElementById("counttext");
let win = document.getElementById("win");
let count = 0;
let starpose = 1;
let flagpose = 11;
function buildtrack() {
  line.textContent = "";
  for (let i = 1; i <= 11; i++) {
    if (i === starpose) {
      line.textContent += "⭐";
    } else if (i < 11) {
      line.textContent += "⬜";
    } else if (flagpose) {
      line.textContent += " 🚩";
    } else if (starpose === flagpose) {
      win.textContent = "yalsaaaan";
    }
  }
}
function right() {
  if (starpose >= 1 && starpose < 11) {
    starpose++;
    count++;
    counttext.textContent = "alham: " + count;
  } else {
  }
  buildtrack();
}
function left() {
  if (starpose > 1 && starpose <= 11) {
    starpose--;
    count++;
    counttext.textContent = "alham: " + count;
  } else {
  }
  buildtrack();
}
function reset() {
  if (starpose > 1) {
    starpose = 1;
    count = 0;
    counttext.textContent = "alham: " + count;
  }
  buildtrack();
}

buildtrack();
