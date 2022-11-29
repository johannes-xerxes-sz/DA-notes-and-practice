/*
1525. Number of Good Ways to Split a String
Medium

You are given a string s.

A split is called good if you can split s into two non-empty strings sleft and sright where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same.

Return the number of good splits you can make in s.

e.g.
Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good.
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.

e.g.
Input: s = "abcd"
Output: 1
Explanation: Split the string as follows ("ab", "cd").

Constraints:
  1 <= s.length <= 105
  s consists of only lowercase English letters.
*/

//initial solution
var numSplits = function(s) {
  let goodSplits = 0;

  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0,i),
        right = s.slice(i),
        leftLetters = {},
        rightLetters = {};

    for (let j = 0; j < Math.max(left.length, right.length); j++) {
      if (left[j] !== undefined) {
        if (leftLetters[left[j]]) {
          leftLetters[left[j]]++
        } else {
          leftLetters[left[j]] = 1;
        }
      }
      if (right[j] !== undefined) {
        if (rightLetters[right[j]]) {
          rightLetters[right[j]]++
        } else {
          rightLetters[right[j]] = 1;
        }
      }
    }

    if (Object.keys(leftLetters).length === Object.keys(rightLetters).length) {
      goodSplits++
    }
  }

  return goodSplits
};

//refactor
var numSplits = function(s) {
  let goodSplits = 0;

  for (let i = 1; i < s.length; i++) {
    let left = s.slice(0,i),
        right = s.slice(i),
        leftLetters = new Set(),
        rightLetters = new Set();

    for (let j = 0; j < Math.max(left.length, right.length); j++) {
      if (left[j] !== undefined) {
        leftLetters.add(left[j])
      }
      if (right[j] !== undefined) {
        rightLetters.add(right[j])
      }
    }

    if (leftLetters.size === rightLetters.size) {
      goodSplits++
    }
  }

  return goodSplits
};

//use count to remove slices
var numSplits = function(s) {
  let goodSplits = 0,
      count = 1,
      splitted = s.split('');

  for (let i = 0; i < s.length; i++) {
    let leftLetters = new Set(),
        rightLetters = new Set();

    for (let j = 0; j < s.length; j++) {
      if (j < count) {
        leftLetters.add(splitted[j]);
      } else {
        rightLetters.add(splitted[j]);
      }
    }

    if (leftLetters.size === rightLetters.size) {
      goodSplits++;
    }

    count++;
  }

  return goodSplits;
};

//refactor
var numSplits = function(s) {
  let goodSplits = 0,
      splitted = s.split('');

  for (let i = 1; i < s.length; i++) {

    if (new Set(splitted.slice(0,i)).size === new Set(splitted.slice(i)).size) {
      goodSplits++
    }
  }

  return goodSplits;
};
