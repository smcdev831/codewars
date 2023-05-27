function fuelPrice(litres, pricePerLitre) {
  if (litres < 2) {
    total = litres * pricePerLitre;
  } else if (litres < 4) {
    total = litres * (pricePerLitre - 0.05);
  } else if (litres < 6) {
    total = litres * (pricePerLitre - 0.1);
  } else if (litres < 8) {
    total = litres * (pricePerLitre - 0.15);
  } else if (litres < 10) {
    total = litres * (pricePerLitre - 0.2);
  } else {
    total = litres * (pricePerLitre - 0.25);
  }
  return Number(total.toFixed(2));
}

//refactoring
function fuelPrice(litres, pricePerLitre) {
  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLitre -= 0.05;
    }
    total = litres * pricePerLitre;
  }
  return Number(total.toFixed(2));
}
