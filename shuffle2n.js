/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn]
*/
var shuffle = function(nums, n) {
  var firstHalf = nums.slice(0,n),
   secondHalf = nums.slice(n),
   combinedArr = [];

  for (var i = 0; i < n; i++) {
    combinedArr.push(firstHalf[i],secondHalf[i])
  }

  return combinedArr;
};

console.log('[2,5,1,3,4,7], 3 => [2,3,5,4,1,7]', JSON.stringify(shuffle([2,5,1,3,4,7],3)) === JSON.stringify([2,3,5,4,1,7]))
console.log('[1,2,3,4,4,3,2,1], 4 => [1,4,2,3,3,2,4,1]', JSON.stringify(shuffle([1,2,3,4,4,3,2,1], 4)) === JSON.stringify([1,4,2,3,3,2,4,1]))
