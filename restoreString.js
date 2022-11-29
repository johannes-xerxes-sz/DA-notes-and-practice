/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

e.g.
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Constraints:
  • s.length == indices.length == n
  • 1 <= n <= 100
  • s contains only lower-case English letters.
  • 0 <= indices[i] < n
  • All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).
*/

var restoreString = function(s, indices) {
  let resultArr = Array(indices.length);

  for (let i = 0; i < s.length; i++) {
    resultArr[indices[i]] = s[i];
  }

  return resultArr.join('')
};

console.log('restoreString("codeleet", [4,5,6,7,0,2,1,3]) => "leetcode" ', restoreString("codeleet", [4,5,6,7,0,2,1,3]) === "leetcode")
