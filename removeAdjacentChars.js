/*
Delete any pair of adjacent characters with same value. ex.
aabcc would become either aab or bcc after the first reduce operation 
repeat the above operation as many times as it can be performed  input aaabccddd output abd
*/

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

deleteAdjacent('aaabccdddbcdd')
