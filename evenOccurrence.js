/*
* Find the first item that occurs an even number of times in an array.
* Remember to handle multiple even-occurrence items and return the first one.
* Return null if there are no even-occurrence items.
*/

/*
* example usage:
* var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
* console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
 var o = [],
     c = {},
     p = 0;

 for (var num of arr) {
   if (!c[num]) {
     c[num] = 1;
   } else {
     c[num]++;
   }
 }

 for (var num in c) {
   if (c[num] % 2 !== 0) {
     delete c[num];
   }
 }

 for (var num of arr) {
   if (c[num]) {
     return num;
   }
 }
 return null;
};
