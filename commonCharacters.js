/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 var commonCharacters = function(string1, string2) {
   var resArr = [];
   var testObj = {};
   var stop;
   var split1 = string1.split('');
   var split2 = string2.split('');
   if (string1.length > string2.length) {
     stop = string1.length;
   } else {
     stop = string2.length;
   }

   for (var i = 0; i < stop; i++) {
     var temp1 = split1[i];
     if (split2.indexOf(temp1) !== -1 && !testObj[temp1]) {
       resArr.push(split1[i]);
       testObj[temp1] = 1;
     }
   }
   return resArr.join('');
 };
