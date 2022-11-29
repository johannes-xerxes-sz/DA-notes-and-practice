/*
A fixed point in an array is an element whose 
value is equal to its index. 
Given a sorted array 
of distinct elements, 
return a fixed point, if one exists. 
Otherwise, return False.

For example, given [-6, 0, 2, 40], you should 
return 2.
Given [1, 5, 7, 8], 
you should return False.
*/

var fixedPoint = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return false;
}

fixedPoint([1, 5, 7, 8])