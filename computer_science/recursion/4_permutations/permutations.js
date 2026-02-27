const permutations = function (arr, index = 0, result = []) {
  if (index === arr.length) {
    result.push([...arr]);
    return result;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permutations(arr, index + 1, result);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }

  return result;
};

permutations([1, 2, 3]);

// Do not edit below this line
module.exports = permutations;
