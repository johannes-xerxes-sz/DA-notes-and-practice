/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


 var characterFrequency = function(string) {
   var tempResult = [],
       storage = {},
       res = [],
       letters = [];

   for (var letter of string) {
     if (!storage[letter]) {
       storage[letter] = 1;
     } else {
       storage[letter]++;
     }
   }

   for (var key in storage) {
     tempResult.push(storage[key])
     letters.push(key);
   }

   tempResult.sort((a, b) => {
     return b - a;
   })

   letters.sort()

   for (var num of tempResult) {
     for (var letter of letters) {
       if (storage[letter] === num) {
         res.push([letter, storage[key]])
         delete storage[letter];
       }
     }
   }

   return res;
 }
