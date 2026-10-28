const seats = document.getElementById("seats");
const message = document.getElementById("message");
const countInput = document.getElementById("countInput");
const bookButton = document.getElementById("bookButton");
const seatss = document.getElementById("seatss");

function bookSeats() {
  const counte = Number(countInput.value);

  if (counte > seatss) {
    message.textContent = "Ердөө 20 суудал үлдсэн";
  } else if (counte <= seatss) {
    const left = seatss - counte;
    seats.textContent = "Үлдсэн суудал: " + left;
    message.textContent = "Захиалга амжилттай ✅";
  }
}
