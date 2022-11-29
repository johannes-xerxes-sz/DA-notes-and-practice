/**
 * @param {string} s
 * @return {number}
 */
/*
var lengthOfLongestSubstring = function(s) {
  var currentSS = '',
      longestSS = 0;

  for (var i = 0; i < s.length; i++) {
    if (currentSS.indexOf(s[i])) {
      if (currentSS.length > longestSS) {
        longestSS = currentSS.length - 1;
      }

    }
    if (currentSS.indexOf(s[i]) === -1) {
      currentSS += s[i];
    }
    if (currentSS.length > longestSS) {
        longestSS = currentSS.length - 1;
    }
  }
  return longestSS;
};

lengthOfLongestSubstring("bbb")
-----------------------take 2-------------------------------*/
var lengthOfLongestSubstring = function(s) {
  let longest = -Infinity,
      storage = {},
      length = 0;
  
  for (var i = 0; i < s.length; i++) {
    if (!storage[s[i]]) {
      storage[s[i]] === 1;
      length++;
    }
    if (storage[s[i]]) {
      if (length > longest) {
        longest = length;
      }
      length === 1;
      storage = {};
      storage[s[i]] = 1;
    }
  
  }
  return longest;
};

lengthOfLongestSubstring('abcabcdabc')