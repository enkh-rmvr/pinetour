function electricityBill(kwh) {
  let totalBill = 0;

  if (kwh <= 100) {
    totalBill = kwh * 150;
  } else if (kwh <= 200) {
    totalBill = 15000 + (kwh - 100) * 200;
  } else {
    totalBill = 35000 + (kwh - 200) * 300;
  }
  console.log(`${kwh} > ${totalBill}`);
}
electricityBill(80);
electricityBill(150);
electricityBill(260);
electricityBill(100);
