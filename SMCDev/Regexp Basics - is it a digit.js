String.prototype.digit = function () {
  return this.length === 1 && "0" <= this && this <= "9";
};
