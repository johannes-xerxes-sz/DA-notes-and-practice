/* LC : 242. Valid Anagram : Easy

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

e.g.
Input: s = "anagram", t = "nagaram"
Output: true

e.g.
Input: s = "rat", t = "car"
Output: false

Constraints:
  1 <= s.length, t.length <= 5 * 104
  s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/*------------------------Hack Reactor Era Solu.------------------------*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sSorted = Array.from(s).sort(),
      tSorted = Array.from(t).sort();

  for (var i = 0; i < sSorted.length; i++) {
    if (sSorted[i] !== tSorted[i]) {
      return false;
    }
  }
  return true;
};
/*----------------------------------------------------------------------*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let sSplit = s.split(''),
      tSplit = t.split('');

  for (let i = 0; i < sSplit.length; i++) {
    let index = tSplit.indexOf(sSplit[i]);
    if (index === -1 ) {
      return false;
    }

    tSplit[index] = null;
  }
  return true;
};
/*----------------------------------------------------------------------*/
var isAnagram = (s, t) => {
  let map = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
      continue;
    }

    if (map[s[i]]) {
      map[s[i]]++
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
      continue;
    }
    if (!map[t[i]]) {
      return false;
    }
  }
  return true;
}

/*--------------------------------TESTS---------------------------------*/
console.log('isAnagram("anagram", "nagaram") => true', isAnagram("anagram", "nagaram") === true)
console.log('isAnagram("rat", "car") => false', isAnagram("rat", "car") === false)
console.log('isAnagram("aacc","ccac") => false', isAnagram("aacc","ccac") === false)
