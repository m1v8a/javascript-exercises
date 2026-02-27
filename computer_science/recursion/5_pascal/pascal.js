const pascal = function (
  rowNumber,
  currentRowNumber = 1,
  currentTriangle = [],
  previousTriangle = [1],
) {
  if (rowNumber === 1) {
    return [1];
  } else {
    const cp = [...previousTriangle, 0]; // arbitrary adds a 0
    for (let i = 0; i < cp.length; i++) {
      if (i === 0) {
        currentTriangle.push(cp[i] + 0);
      } else {
        currentTriangle.push(cp[i] + cp[i - 1]);
      }
    }
  }

  if (rowNumber - 1 === currentRowNumber) {
    return currentTriangle;
  } else {
    currentTriangle = pascal(
      rowNumber,
      currentRowNumber + 1,
      [],
      [...currentTriangle],
    );
  }

  return currentTriangle;
};

// Do not edit below this line
module.exports = pascal;
