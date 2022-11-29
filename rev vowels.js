/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var vowels = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
      vowels.push(s[i])
    }
  }
  vowels.reverse()
  var splitted = s.split('');
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] === 'a' || splitted[i] === 'e' || splitted[i] === 'i' || splitted[i] === 'o' || splitted[i] === 'u' || splitted[i] === 'A' || splitted[i] === 'E' || splitted[i] === 'I' || splitted[i] === 'O' || splitted[i] === 'U') {
      splitted[i] = vowels[0];
      vowels.shift();
    }
  }
  return splitted.join('');
};

reverseVowels('leetcode')
