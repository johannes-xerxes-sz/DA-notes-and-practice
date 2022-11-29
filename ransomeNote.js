/* LC: 383. Ransom Note : Easy

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

e.g.
Input: ransomNote = "a", magazine = "b"
Output: false

e.g.
Input: ransomNote = "aa", magazine = "ab"
Output: false

e.g.
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
  1 <= ransomNote.length, magazine.length <= 105
  ransomNote and magazine consist of lowercase English letters.
*/
/*------------------------------O(n)------------------------------------*/
var canConstruct = (ransomNote, magazine) => {
  let magazineHash = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magazineHash[magazine[i]]) {
      magazineHash[magazine[i]] ++;
      continue;
    }
    magazineHash[magazine[i]] = 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineHash[ransomNote[i]] || magazineHash[ransomNote[i]] === 0) {
      return false;
    }
    magazineHash[ransomNote[i]] --;
  }
  return true;
};

/*--------------------------------TESTS---------------------------------*/
console.log('canConstruct("a", "b") => false', canConstruct("a", "b") === false)
console.log('canConstruct("aa", "ab") => false', canConstruct("aa", "ab") === false)
console.log('canConstruct("aa", "aab") => true', canConstruct("aa", "aab") === true)
