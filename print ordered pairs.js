function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem);
    });
  });
}

printAllPossibleOrderedPairs([1,2,3,4,5,6,7,8])