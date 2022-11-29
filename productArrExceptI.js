/*
Given an array of integers, return a new array such that each
element at index i of the new array is the product of all the
numbers in the original array except the one at i.
e.g.
[1, 2, 3, 4, 5] -> [120, 60, 40, 30, 24]
[3, 2, 1] -> [2, 3, 6]

*/

var productArrExceptI = (arr) => {
  var sum = arr.reduce((sum, cv) => {return sum * cv})

  var sumArr = arr.map((el,i) => {
    return sum / arr[i]

  })

  return sumArr
}

// Follow-up: what if you can't use division?
var productArrExceptI = (arr) => {
  var resArr =[]

  for (var i = 0; i < arr.length; i++) {
      var currSum = 1;
    for (var j = 0; j < arr.length; j++) {

      if (j !== i) {
          currSum *= arr[j]
      }

      if (j === arr.length - 1) {
        resArr.push(currSum);
        currSum = 1;
      }
    }
  }

return resArr;
}




console.log('[1, 2, 3, 4, 5J => [120, 60, 40, 30, 24]', JSON.stringify(productArrExceptI([1, 2, 3, 4, 5])) === JSON.stringify([120, 60, 40, 30, 24]));
console.log('[3, 2, 1] => [2, 3, 6]', JSON.stringify(productArrExceptI([3, 2, 1])) === JSON.stringify([2, 3, 6]));
