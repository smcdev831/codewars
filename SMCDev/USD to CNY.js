function usdcny(usd) {
  let cny = (usd * 6.75).toFixed(2);
  return `${cny} Chinese Yuan`;
}

//refactoring

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}
