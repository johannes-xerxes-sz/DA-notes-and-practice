/*
Given an array of integers out of order, determine the bounds of the smallest window that must be sorted 
in order for the entire array to be sorted. For example, 
given [3, 7, 5, 6, 9], you should 
return (1, 3). 
*/

var smallestWindowSortArr = (arr) => {
  var sortedArr = Array.from(arr).sort((a, b) => {return a - b} ),
      outOfOrder =[];

  for (var i = 0; i < arr.length; i++) {
    if (sortedArr[i] !== arr[i]) {
      outOfOrder.push(i)
    }
  } 
  console.log(outOfOrder, sortedArr)
  return [outOfOrder[0], outOfOrder[outOfOrder.length -1]];

}




smallestWindowSortArr([3, 7, 5, 6,11, 9, 11])