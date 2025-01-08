function calculateBill(bill) {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    let total = bill + tip;
    return `Bill la ${bill}, Tip la ${tip.toFixed(2)}, tong gia tri la: ${total.toFixed(2)}`;
  }
  let bill = 275;
  let bill1=40;
  let bill2=430;
  console.log(calculateBill(bill));
  console.log(calculateBill(bill1));
  console.log(calculateBill(bill2));
  