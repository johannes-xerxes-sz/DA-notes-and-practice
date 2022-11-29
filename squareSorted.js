// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

function squareSorted(input) {
  for (var i = 0; i < input.length; i++) {
//     if (input[i] < 0) {
//       input[i] = input[i] * -1;
//     }
    input[i] = Math.pow(input[i], 2);
  }
  return input.sort(function(a,b) {
    return a - b;
  });
}

squareSorted([-9, -2, 0, 2, 3]);