const totalIntegers = function (arr, initialCall = true) {
  if (!Array.isArray(arr) && typeof arr !== "object") {
    if (initialCall) {
      return undefined;
    } else {
      return typeof arr === "number" && Number.isInteger(arr) ? 1 : 0;
    }
  }

  let total = 0;
  if (!Array.isArray(arr) && typeof arr === "object") {
    for (const key in arr) {
      total += totalIntegers(arr[key], false);
    }
  } else {
    arr.forEach((item) => {
      total += totalIntegers(item, false);
    });
  }

  return total;
};

// totalIntegers([1, 2, 3]);

// Do not edit below this line
module.exports = totalIntegers;
