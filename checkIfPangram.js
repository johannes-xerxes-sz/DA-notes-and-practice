/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

e.g.
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

e.g.
Input: sentence = "leetcode"
Output: false

Constraints:
  1 <= sentence.length <= 1000
  sentence consists of lowercase English letters.
*/
//naive
var checkIfPangram = function(sentence) {
  let resObj = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!resObj[sentence[i]]) {
      resObj[sentence[i]] = 1;
    }
  }
  return Object.keys(resObj).length === 26 || false;
};
//better
var checkIfPangram = function(sentence) {
  let resObj = {},
      length = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (!resObj[sentence[i]]) {
      resObj[sentence[i]] = 1;
      length++
    }
  }
  return length === 26 || false;
};
//betterer
let checkIfPangram = function(sentence) {
  return new Set([...sentence]).size === 26 || false;
};
//best
let checkIfPangram = sentence => new Set([...sentence]).size === 26 || false;
