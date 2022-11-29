function incrementString (strng) {
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  
  for (let i = 0; i < strng.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (strng[i] === numbers[j] && numbers[j] !== '0') {
        let text = strng.slice(0,i),
            number = strng.slice(i);
            for (var k = 0; k < number.length; k++) {
              if (number[k] !== '0') {
                let subNum = String(Number(number.slice(k)) + 1);
                return text  + subNum;
              }
            }
      }
    }
  }
}

incrementString('foobar0099')
// incrementString('foobar1')
// incrementString('foobar23')
// incrementString('foobar000012')