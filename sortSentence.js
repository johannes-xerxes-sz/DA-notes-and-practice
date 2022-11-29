/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
Each word consists of lowercase and uppercase English letters.
A sentence can be shuffled by appending the 1-indexed word position to each word 
then rearranging the words in the sentence.

e.g. 
"This is a sentence" can be shuffled as 
"sentence4 a3 is2 This1" or 
"is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, 
reconstruct and return the original sentence.

Constraints:
  2 <= s.length <= 200
  s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
  The number of words in s is between 1 and 9.
  The words in s are separated by a single space.
  s contains no leading or trailing spaces.
*/
var sortSentence = function(s) {
  let splitted = s.split(' '),
      resArr = [];

  for (let i = 0; i < splitted.length; i++) {
    let current = splitted[i];
    resArr[current[Number(current.length - 1)] - 1] = current.slice(0, current.length - 1)
  } 

  return resArr.join(' ');
};


console.log('"is2 sentence4 This1 a3" => "This is a sentence"', sortSentence("is2 sentence4 This1 a3") ===  "This is a sentence")
console.log('"Myself2 Me1 I4 and3" => "Me Myself and I"', sortSentence("Myself2 Me1 I4 and3") ===  "Me Myself and I")
