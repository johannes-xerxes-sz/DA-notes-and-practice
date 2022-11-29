/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

 /**
  * Write a function that, given a string, Finds the longest run of identical
  * characters and returns an array containing the start and end indices of
  * that run. If there are two runs of equal length, return the first one.
  * For example:
  *
  *   longestRun("abbbcc") // [1, 3]
  *   longestRun("aabbc")  // [0, 1]
  *   longestRun("abcd")   // [0, 0]
  *   longestRun("")       // null
  *
  * Try your function with long, random strings to make sure it handles large
  * inputs well.
  */

 var longestRun = function (string) {
   var resArr = [];
   var testObj = {};
   var splitted = string.split('')

   for (var i = 1; i < splitted.length; i++) {
     if (splitted[i] === splitted[i - 1]) {
       testObj[i] = 1;
     }
   }

   for (var key in testObj) {
     for (var i = 1; i < splitted.length; i++) {
       if (testObj[splitted[i]] && (splitted[i] === splitted[i - 1])) {
         testObj[i] += 1;
       }
     }
   }

   var longestObj = {};
   var longest = 0;
   var longestLetter = '';
   for (key in testObj) {
     if (testObj[key] > longest) {
       longest = testObj[key]
       longestLetter = key;
     } else if (testObj[key] === longest) {
       longestArr
     }
   }

 //   return resArr;
 };

 // If you need a random string generator, use this!
 // (you wont need this function for your solution but it may help with testing)
 var randomString = function (len) {
   var text = '';
   var possible = 'abcdefghijklmnopqrstuvwxyz';

   for (var i = 0; i < len; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }

   return text;
 };
