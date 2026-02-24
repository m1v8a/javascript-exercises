const contains = function (object, target) {
  if (Array.isArray(object) || typeof object !== "object" || object === null) {
    if (Number.isNaN(target)) {
      return Number.isNaN(object);
    }
    return object === target;
  }

  let isTargetPresent = false;
  for (const key in object) {
    isTargetPresent = contains(object[key], target);
    if (isTargetPresent) break;
  }
  return isTargetPresent;
};

contains({ huh: "What" });

// Do not edit below this line
module.exports = contains;
