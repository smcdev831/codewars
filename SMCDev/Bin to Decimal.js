// function binToDec(bin){
//  return parseInt((bin + '')
//     .replace(/[^01]/gi, ''), 2);
//   }

// function binToDec(bin) {
//   let dec = 0;
//   for (let i = bin.length - 1; i >= 0; i--) {
//     dec += bin[bin.length - (i + 1)] * 2 ** i;
//   }
//   return dec;
// }

function binToDec(bin) {
  return parseInt(bin, 2);
}
