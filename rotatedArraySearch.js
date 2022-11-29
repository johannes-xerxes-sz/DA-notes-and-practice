/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 For instance:
  */


 // Target time complexity: O(log(array.length))


 var rotatedArraySearch = function (rotated, target) {
   // use binary search!
   var start = 0;
   var end = rotated.length - 1;
   // var stop = false;
   //0 1 2 3 4 5 7
   while (end >= start) {
     var middle = Math.floor((start + end) / 2);
     if (target > rotated[middle]) {
       start = middle + 1;
     }
     if (target < rotated[middle]) {
       end = middle - 1;
     }
     if (target === rotated[middle]) {
       return middle;
     }

   }
   return null;
 };

rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) 
// === 5
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
