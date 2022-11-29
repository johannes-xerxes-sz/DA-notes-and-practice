/* 151. Reverse Words in a String -- Medium

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

e.g.
Input: s = "the sky is blue"
Output: "blue is sky the"

e.g.
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

e.g.
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

Constraints:
  1 <= s.length <= 104
  s contains English letters (upper-case and lower-case), digits, and spaces ' '.
  There is at least one word in s.
*/

var reverseWords = function(s) {
      //split words into an array of letter
  let splitted = s.split(' '),
      leftPointer = 0,
      rightPointer = splitted.length - 1;

  while (leftPointer < rightPointer) {
    let temp = splitted[leftPointer];

    splitted[leftPointer] = splitted[rightPointer];
    splitted[rightPointer] = temp;

    leftPointer++;
    rightPointer--;
  }
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length === 0) {
      splitted.splice(i, 1)
      i--
    }
  }
  return splitted.join(' ');
};
