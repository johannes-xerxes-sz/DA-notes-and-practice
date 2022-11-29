var defangIPaddr = function(address) {
  var splitted = address.split(''),
      resultArr = [];

  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] !== '.') {
      resultArr.push(splitted[i])
    }
    if (splitted[i] === '.') {
      resultArr.push('[','.',']')
    }
  }

  return resultArr.join('')
};
