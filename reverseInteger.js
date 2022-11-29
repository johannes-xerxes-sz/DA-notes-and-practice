/*
LeetCode #7
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

e.g.
Input: x = 123
Output: 321

e.g.
Input: x = -123
Output: -321

e.g.
Input: x = 120
Output: 21

Constraints:
  -231 <= x <= 231 - 1
*/
/*-------------------------------manually-------------------------------*/
var reverse = function(x) {
  let splitted = String(x).split(''),
      isNegative = false,
      result = 0;

  if (splitted[0] === '-') {
    isNegative = true;
    splitted.shift()
  }

  let leftIndex = 0,
      rightIndex = splitted.length - 1;

  while (leftIndex < rightIndex) {
    let temp = splitted[leftIndex];

    splitted[leftIndex] = splitted[rightIndex];
    splitted[rightIndex] = temp;

    leftIndex++
    rightIndex--
  }

  result = isNegative ? Number(splitted.join('')) * -1 : Number(splitted.join(''))

  if (result > 2 ** 31 || result < (-1 *(2 ** 31))) {
    return 0
  }

  return result;
};
/*----------------------using native rev function-----------------------*/
var reverse = function(x) {
  let max = Math.pow(2,31),
      min = -1 * max,
      isNeg = x < 0,
      splitted = String(x).split(''),
      result = null;

  if (isNeg) {
    splitted.shift();
    result = Number(splitted.reverse().join('')) * -1;
  } else {
    result = Number(splitted.reverse().join(''))
  }

  if (result > max || result < min) {
    return 0
  }

  return result;
};
/*----------------------------------------------------------------------*/
/*------------------------Old H.R. Era attempt--------------------------*/
/*----------------------------------------------------------------------*/
var reverse = function(x) {
    let result = 0;

    if (x > 0) {
        result = Number(String(x).split('').reverse().join(''));
    }

    if (x < 0) {
        x = x * -1;
        x = Number(String(x).split('').reverse().join(''));
        result = x * -1;
    }

    if ((result > (Math.pow(2, 31) -1)) || (result < (Math.pow(-2, 31)))) {
        return 0;
    }

    return result;
};
