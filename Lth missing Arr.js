function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays.length === 0) {
    return 0;
  }
  let temp = arrayOfArrays.sort(function(a,b) {
    return a.length-b.length;
  });
  let lengthIndex = temp[0].length;

  for (var i = 0; i < temp.length; i++) {
    if (temp[i].length !== lengthIndex) {
      return lengthIndex;
    }
    lengthIndex++;
  }
}

getLengthOfMissingArray([[1,2,3],[5,23,2,1,8,7],[1,2,3,4],[1,2]])