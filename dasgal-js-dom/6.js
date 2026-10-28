const perPerson = document.getElementById("perPerson");
const peopleInput = document.getElementById("peopleInput");
const daysInput = document.getElementById("daysInput");
const hotelInput = document.getElementById("hotelInput");
const foodInput = document.getElementById("foodInput");
const busInput = document.getElementById("busInput");
const hotelTotal = document.getElementById("hotelTotal");
const foodTotal = document.getElementById("foodTotal");
const total = document.getElementById("total");

function planTrip() {
  const people = Number(peopleInput.value);
  const days = Number(daysInput.value);
  const hotel = Number(hotelInput.value);
  const food = Number(foodInput.value);
  const bus = Number(busInput.value);

  const hotelPrice = Number(hotel * days);
  const foodPrice = Number(food * people * days);
  const allIn = Number(foodPrice + hotelPrice + bus);
  const per = Number(allIn / people);

  perPerson.textContent = "Нэг хүн: " + per;
  hotelTotal.textContent = "Буудал: " + hotelPrice;
  foodTotal.textContent = "Хоол: " + foodPrice;
  total.textContent = "Нийт: " + allIn;
}
