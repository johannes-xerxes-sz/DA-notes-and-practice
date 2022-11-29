function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  }
  addToRange = rangeOfNumbers(startNum, endNum - 1)
  addToRange.push(endNum)
  return addToRange;
};
