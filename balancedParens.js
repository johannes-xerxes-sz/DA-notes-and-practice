/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
 var balancedParens = function(input) {
  splitted = input.split('');
  testObj = {};
  var testArr = [];

  for (el of splitted) {
    if (!testObj[el]) {
      testObj[el] = 1;
    } else {
      testObj[el] += 1;
    }
  }

  if (testObj.hasOwnProperty('(')) {
    testArr.push('(')
  }
  if (testObj.hasOwnProperty(')')) {
    testArr.push(')')
  }
  if (testObj.hasOwnProperty('[')) {
    testArr.push('[')
  }
  if (testObj.hasOwnProperty(']')) {
    testArr.push(']')
  }
  if (testObj.hasOwnProperty('{')) {
    testArr.push('{')
  }
  if (testObj.hasOwnProperty('}')) {
    testArr.push('}')
  }

  var stillTrue = false;

  if (testArr.includes('(') && testArr.includes(')')) {
    if (testArr['('] === testArr[')']) {
      stillTrue = true;
    } else {
      return false;
    }
  }

  if (testArr.includes('[') && testArr.includes(']')) {
    if (testArr['['] === testArr[']']) {
      stillTrue = true;
    } else {
      return false;
    }
  }

  if (testArr.includes('{') && testArr.includes('}')) {
    if (testArr['{'] === testArr['}']) {
      stillTrue = true;
    } else {
      return false;
    }
  }
  return stillTrue;
};
