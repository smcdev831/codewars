var findAverage = function (nums) {
  let total = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return total / nums.length;
};
