function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;
}
