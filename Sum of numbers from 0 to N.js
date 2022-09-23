var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    let numbers = [];
    let total = 0;
    if (count < 0) {
      return `${count}<0`;
    } else if (count == 0) {
      return "0=0";
    } else {
      for (let i = 0; i <= count; i++) {
        numbers.push(i);
        total += i;
      }
      return `${numbers.join("+")} = ${total}`;
    }
  };

  return SequenceSum;
})();
