//Using RegEx
function pascalToSnakeCase(string) {
  if (typeof string === 'number') {
    return String(string)
  }
  return string.split(/(?=[A-Z])/).join('_').toLowerCase()
}

//Non-RegEx
function pascalToSnakeCase(string) {
  var result = [];

  if (typeof string === 'number') {
    return String(string)
  }

  if (string.length === 1) {
    if (typeof string === 'number') {
      return String(string)
    }
    return string.toLowerCase()
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== string[i] && i === string.length - 1) {
      result.push('_', string[i].toLowerCase())
      break;
    }
    if (string[i].toLowerCase() !== string[i] && string[i + 1].toLowerCase !== string[i + 1]) {
      if (i === 0) {
        result.push(string[i].toLowerCase());
        continue;
      }
      result.push('_', string[i].toLowerCase());
      continue;
    }
    result.push(string[i]);
  }

return result.join('');
}




console.log('MoviesAndBooks => movies_and_books', pascalToSnakeCase('MoviesAndBooks') === 'movies_and_books');
console.log('App7Test => app7_test', pascalToSnakeCase('App7Test') === 'app7_test');
console.log("1 => '1'", pascalToSnakeCase(1) === '1');
console.log("TestController => test_controller", pascalToSnakeCase('TestController') === 'test_controller');
console.log('adsa10D => adsa10_d', pascalToSnakeCase('adsa10D') === 'adsa10_d');
