/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.
Return the maximum amount of split balanced strings.

e.g.
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

e.g.
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

e.g.
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

e.g.
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

Constraints:
  1 <= s.length <= 1000
  s[i] is either 'L' or 'R'.
  s is a balanced string.
*/

let balancedStrSplit = (s) => {
  let stack = [s[0]],
      count = 0;

  for (var i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] !== s[i] && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    if (stack.length === 0) {
      count++;
    }
  }
  return count;
}

console.log('balancedStrSplit("RLRRLLRLRL") => 4', balancedStrSplit("RLRRLLRLRL") === 4)
console.log('balancedStrSplit("RLLLLRRRLR") => 3', balancedStrSplit("RLLLLRRRLR") === 3)
console.log('balancedStrSplit("LLLLRRRR") => 1', balancedStrSplit("LLLLRRRR") === 1)
console.log('balancedStrSplit("RLRRRLLRLL") => 2', balancedStrSplit("RLRRRLLRLL") === 2)
