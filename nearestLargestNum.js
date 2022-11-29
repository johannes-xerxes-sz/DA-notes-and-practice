/*
Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.

For example, given [4, 1, 3, 5, 6] and index 0, you should return 3.

If two distances to larger numbers are the equal, then return any one of them. If the array at i doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?
*/

var nearestLargest = (arr, index) => {
//variable to save position of larger number < i
//variable to save position of larger number > i
  var beforeI,
      afterI;

//for loop
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index] && i < index) {
      beforeI = i;
    }
    if (arr[i] > arr[index] && i > index) {
      afterI = i;
      break;
    }
  }

//if variables both === undefined return null
  if (beforeI === undefined && afterI === undefined) {
    return null;
  }
//else return smaller absolute difference variable
  if (beforeI === undefined && afterI !== undefined) {
    return afterI
  }
  if (beforeI !== undefined && afterI === undefined) {
    return beforeI
  }

  return (Math.abs(index - beforeI) < Math.abs(index - afterI) ? beforeI : afterI)

}
