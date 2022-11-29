/* LC : 125. Valid Palindrome : Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

e.g.
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

e.g.
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

e.g.
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
  1 <= s.length <= 2 * 105
  s consists only of printable ASCII characters.
*/

/*---------------------------------O(n)---------------------------------*/
var isPalindrome = (s) => {
  let splitted = s.toLowerCase().split('')

// remove all non alphanumeric characters
// char code = 97-122 + 48-57
  for (let i = 0; i < splitted.length; i++) {
    let code = splitted[i].charCodeAt(0)
    if ((code >= 97 && code <= 122)) {
      continue;
    }
    if ((code >= 48 && code <= 57)) {
      continue;
    }

    splitted.splice(i,1);
    i--;
  }

  let startPointer = 0,
      endPointer = splitted.length - 1;

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[startPointer] !== splitted[endPointer]) {
      return false;
    }
    startPointer++;
    endPointer--;
  }

  return true;
}

/*--------------------------------TESTS---------------------------------*/
console.log('isPalindrome("A man, a plan, a canal: Panama") => true' , isPalindrome("A man, a plan, a canal: Panama") === true );
console.log('isPalindrome("0P") => false' , isPalindrome("0P") === false );
console.log('isPalindrome(" ") => true' , isPalindrome(" ") === true );
