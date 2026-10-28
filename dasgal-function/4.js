function ticketPrice(age) {
  if (age < 6) {
    console.log(`${age} nas: unegui`);
  } else if (age < 18) {
    console.log(`${age} nas: 3000`);
  } else if (age < 60) {
    console.log(`${age} nas: 6000`);
  } else {
    console.log(`${age} nas: 2000`);
  }
}
ticketPrice(4);
ticketPrice(12);
ticketPrice(30);
ticketPrice(65);
