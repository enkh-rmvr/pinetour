const pay = document.getElementById("pay");
const amountInput = document.getElementById("amountInput");
const discount = document.getElementById("discount");
const delivery = document.getElementById("delivery");

function checkout() {
  const amount = Number(amountInput.value);
  const hundkdisc = amount * 0.1;
  const fiddykdisc = amount * 0.05;
  const posthunniddisc = amount - hundkdisc;
  const postfiddykdisc = amount - fiddykdisc;
  if (amount >= 100000) {
    discount.textContent = "Хямдрал: " + hundkdisc + "₮";
    pay.textContent = "Төлөх: " + posthunniddisc + "₮";
    delivery.textContent = "Хүргэлт: Үнэгүй";
  } else if (amount >= 50000) {
    discount.textContent = "Хямдрал: " + fiddykdisc + "₮";
    pay.textContent = "Төлөх: " + postfiddykdisc + "₮";
    delivery.textContent = "Хүргэлт: Үнэгүй";
  } else if (amount >= 30000) {
    discount.textContent = "Хямдрал: 0₮";
    pay.textContent = amount;
    delivery.textContent = "Хүргэлт: Үнэгүй";
  } else {
    discount.textContent = "Хямдрал: 0₮";
    pay.textContent = amount + 5000 + "₮";
    delivery.textContent = "Хүргэлт: 5000₮";
  }
}
