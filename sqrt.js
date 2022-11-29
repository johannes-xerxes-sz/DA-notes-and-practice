/*
69. Sqrt(x)
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

e.g.
Input: x = 4
Output: 2

e.g.
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

Constraints:
  0 <= x <= 231 - 1
*/

var mySqrt = function(x) {
   for (let i = 0; i < x; i++) {
     if ((i * i) === x) {
       return i;
     }
     if ((i * i) > x) {
       return  i - 1;
     }
   }
};
