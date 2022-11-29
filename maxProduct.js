/*
318. Maximum Product of Word Lengths
Medium

Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

e.g.
Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".

e.g.
Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".

e.g.
Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.

Constraints:
  2 <= words.length <= 1000
  1 <= words[i].length <= 1000
  words[i] consists only of lowercase English letters.
*/

var maxProduct = function(words) {
  let max = 0;

  for (let i = 0; i < words.length; i++) {
    let hasCommonLetter = false;
    for (let j = i+1; j < words.length; j++) {
      for (let k = 0; k < words[i].length; k++) {
        if (words[j].includes(words[i][k])) {
          hasCommonLetter = true;
          break;
        }
      }
      if (hasCommonLetter === false) {
        if ((words[i].length * words[j].length) > max) {
          max = words[i].length * words[j].length
        }
      }
      hasCommonLetter = false;
    }
  }

  return max;
};

console.log('maxProduct(["a","ab","abc","d","cd","bcd","abcd"]) => 4', maxProduct(["a","ab","abc","d","cd","bcd","abcd"]) === 4)
console.log('maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]) => 16', maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]) === 16)
