//Given an array and a number k that's smaller than
//the length of the array, rotate the array to the
//right k elements in-place.

function rotateArrayRight(arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop())
  }
  return
}

rotateArrayRight([1,2,3,4,5], 3);
