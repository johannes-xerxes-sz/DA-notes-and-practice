/*
This problem was asked by Google.

Given a string of words delimited by spaces, reverse the words in string.
e.g.
given "hello world here" return "here world hello"

Follow-up: given a mutable string representation, can you perform this operation in-place?
*/

//simple solution
var reverseStr = (string) => {
  let splitted = string.split(' ');

  return splitted.reverse().join(' ')
}

console.log('reverseStr("hello world here") === "here world hello"', reverseStr("hello world here") === "here world hello")

//Manually
var reverseStr = (string) => {
  let splitted = string.split(' '),
      leftIndex = 0,
      rightIndex = splitted.length - 1;

  while (leftIndex < rightIndex) {
    let temp = splitted[leftIndex];

    splitted[leftIndex] = splitted[rightIndex];
    splitted[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return splitted.join(' ');
}
/*----------------------------------------------------------------------*/
/*-----------------------------Follow-Up--------------------------------*/
/*----------------------------------------------------------------------*/
/*
In Javascript strings are immutable, but we can model a string as an array of characters

i.e.
string = 'hello'
string = string.split('')
console.log(string) //output: ["h", "e", "l", "l", "o"]
*/
var reverseString = (letterArr) => {
  let leftIndex = 0,
      rightIndex = letterArr.length - 1;
 
  while (leftIndex < rightIndex) {
    let temp = letterArr[leftIndex];

    letterArr[leftIndex] = letterArr[rightIndex];
    letterArr[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return letterArr;
}

/*!!!!!!!!!!!!!!!!!!!!!!!! NOT WORKING PROPERLY !!!!!!!!!!!!!!!!!!!!!!!!*/
var reverseStringInPlace = (letterArr) => {
  let reversedLetterArr = reverseString(letterArr),
      currentIndex = 0;

  for (var i = 0; i < reversedLetterArr.length; i++) {
    if (reversedLetterArr[i] === ' ' || i === reversedLetterArr.length - 1) {
      let word = reversedLetterArr.slice(currentIndex, i)
      console.log(word)
      reversedLetterArr.splice(currentIndex, i, reverseString(word).join(''));
      currentIndex = 1;
    }

  }

return reversedLetterArr
}

reverseStringInPlace(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " ", "h", "e", "r", "e"])
