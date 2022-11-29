/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

e.g.
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

var maximumWealth = function(accounts) {
    for (var i = 0; i < accounts.length; i++) {
      var sum = 0;
      for (var j = 0; j < accounts[i].length; j++) {
        sum += accounts[i][j];
        if (j === accounts[i].length - 1) {
          accounts[i] = sum;
          sum = 0;
        }
      }
    }
    return Math.max(...accounts);
};
