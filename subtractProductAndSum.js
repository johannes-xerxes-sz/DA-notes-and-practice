/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

e.g.
Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15

e.g.
Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21

Constraints:
  1 <= n <= 10^5
*/
var subtractProductAndSum = function(n) {
  let splitted = String(n).split('')
      sum = 0,
      product = 1;

  for (let i = 0; i < splitted.length; i++) {
    sum += Number(splitted[i]);
    product *= Number(splitted[i]);
  }

  return product - sum;
};
//refactor
var subtractProductAndSum = function(n) {
  let splitted = String(n).split(''),
      sum = splitted.reduce((acc, cv) => {return Number(acc) + Number(cv)}),
      product = splitted.reduce((acc, cv) => {return Number(acc) * Number(cv)});

  return product - sum;
};

console.log('subtractProductAndSum(234) => 15', subtractProductAndSum(234) === 15)
console.log('subtractProductAndSum(4421) => 21', subtractProductAndSum(4421) === 21)
