/*
Given an integer n and an integer start.
Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.

e.g.
Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

e.g.
Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

e.g.
Input: n = 1, start = 7
Output: 7

e.g.
Input: n = 10, start = 5
Output: 2

Constraints:
    1 <= n <= 1000
    0 <= start <= 1000
    n == nums.length
*/

let xorOperation = function(n, start) {
  let nums = [], //only neccessary to  conform w/ problem specifications
      result = 0;

  for (let i = 0; i < n; i++) {
    nums.push(start + 2 * i); //only neccessary to  conform w/ problem specifications
    result = result ^ (start + 2 * i)
  }
 return result;
};

//decresed space complexity
let xorOperation = function(n, start) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result = result ^ (start + 2 * i)
  }

 return result;
};

console.log('xorOperation(5, 0) => 8', xorOperation(5, 0) === 8)
console.log('xorOperation(4, 3) => 8', xorOperation(4, 3) === 8)
console.log('xorOperation(1, 7) => 7', xorOperation(1, 7) === 7)
console.log('xorOperation(10, 5) => 2', xorOperation(10, 5) === 2)
