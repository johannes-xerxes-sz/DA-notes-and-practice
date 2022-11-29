/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var split = str.split('').sort();
  var subsets = [''];
  var testObj = {};
  // var stillSetting = false;
  // var recurse = function(el, i) {}
  var temp = 0
  var temp = split[temp];
  for (var j = 0; j < (Math.pow(2, split.length) - 1); j++) {
    var  tempStr = split[j];
    for (var k = 0; k < split.length; k++) {
      if (!testObj[tempStr]) {

        subsets.push(tempStr);
        testObj[tempStr] = 1;
      }
      tempStr += split[k];
    }

  }
  return subsets;
};
