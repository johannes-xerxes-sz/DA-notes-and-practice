/*
Delete any pair of adjacent characters with same value. ex.
aabcc would become either aab or bcc after the first reduce operation 
repeat the above operation as many times as it can be performed  input aaabccddd  output abd
*/
/*
//old approach
var deleteAdjacent = (str) => {
  var splitted = str.split(''),
      resultArr = [],
      current = '';

  for (var i = 0; i < splitted.length; i++) {
    if (current !== splitted[i]) {
      current = splitted[i];
      resultArr.push(splitted[i])
    }

  }

  return resultArr.join('');
}
*/
//new approach
let deleteAdjacent = (input) => {
  let splitInput = input.split('');

  for (let i = 0; i < splitInput.length; i++) {
    if (splitInput[i] === splitInput[i + 1]) {
      splitInput.splice(i,1)
      i--;
    }
  }

  return splitInput.join('')
}




console.log('deleteAdjacent("aaabccddd") === abcd', deleteAdjacent('aaabccddd') === 'abcd' )
console.log('deleteAdjacent("aabcc") === abc', deleteAdjacent('aabcc') === 'abc' )
