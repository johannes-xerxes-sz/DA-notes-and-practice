var myAtoi = function(s) {
  let resArr = [],
      isNegative = false,
      result = 0;

  let min = -1 * (2 ** 31),
      max = 2 ** 31;

  //iterate through string searching for '-' and nums
    //if '-' is present, flip isNegative
    //push nums to resArr

    //STOP CONDITION: if s.length || (resArr.length > 0 && s[i] !== number)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-') {
      isNegative = true;
    }
    if (isFinite(s[i]) && s[i] !== ' ') {
      resArr.push(s[i]);
    }

    if (resArr.length > 0 && !!isFinite([s[i]]) === false) {
      break;
    }
    if (resArr.length > 0 && s[i] === ' ') {
      break;
    }
    //req. dont state this, but test cases dont want first non empty char to be a non-#? this does that
    if (resArr.length === 0 && s[i] !== ' ' && isFinite(s[i]) === false) {
      if (s[i] === '+' || s[i] === '-') {
        continue;
      }
      break;
    }

  }

  //if resArr.length === 0 return result
  if (resArr.length === 0) {
    return result;
  }
  //else
  //join resArr if lngth > 0 & convert to number
    //if isNegative multiply by -1
  //check if in bounds -2^31 <-> 2^31 - 1
    //yes? return result : nearest boundary
  result = isNegative ? Number(resArr.join('')) * -1 : Number(resArr.join(''))

  if (result > max) {
    result = max
  }
  if (result < min) {
    result = min
  }

  return result;
}


/*----------------------------------------------------------------------*/
/*------------------------Old H.R. Era attempt--------------------------*/
/*----------------------------------------------------------------------*/
var myAtoi = function(str) {
  var negative = false,
      number = '';

  for (var i = 0; i < str.length; i++) {
    if (number.length > 0 && str[i] === ' ') {
      break;
    }

    if (str[i] === ' ') {
      continue;
    }

    if ((str[i] === '+' && str[i + 1] === '-') || (str[i] === '-' && str[i + 1] === '+')) {
        return 0;
    }

    if (str[i] === '-') {
      negative = true;
      continue;
    }

    if (str[i] === '+') {
      continue;
    }

    if (str[i] === '0') {
      number += str[i];
      continue;
    }

    if (!!Number(str[i]) === false) {
      break;
    }

    number += str[i];
  }

  !!Number(number) ? number = Number(number) : number = 0;


  if (Math.abs(Number(number)) > Math.pow(2, 31)) {
    negative ? number = -1 * Math.pow(2, 31) : number = Math.pow(2, 31);
    return number;
  }

  if (negative === true) {
    number = number * -1
  }
  return number

};
