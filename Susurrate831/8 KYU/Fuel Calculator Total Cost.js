function fuelPrice(litres, pricePerLitre) {
  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLitre -= 0.05;
    }
  }
  return Math.round(litres * pricePerLitre * 100) / 100;
}
