/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

e.g.
moveZeros([false,1,0,1,2,0,1,3,"a"])
returns [false,1,1,2,1,3,"a",0,0]

*/

var moveZeros = function(arr) {
  var zeroArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i,1)
      zeroArr.push(0)
      i--
    }
  }
  return arr.concat(zeroArr);
}

// JSON.stringify(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])) === JSON.stringify([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0])
JSON.stringify( moveZeros([1,2,0,1,0,1,0,3,0,1]) ) === JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
