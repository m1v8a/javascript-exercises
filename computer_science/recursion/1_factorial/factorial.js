const factorial = function (n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) return;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;

