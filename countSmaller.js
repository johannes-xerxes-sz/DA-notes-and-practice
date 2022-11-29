/*
You are given an integer array nums and you have to return a new counts array.
The counts array has the property where counts[i] is the
number of smaller elements to the right of nums[i].

e.g.
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

e.g.
Input: nums = [-1]
Output: [0]

e.g.
Input: nums = [-1,-1]
Output: [0,0]

Constraints:
  1 <= nums.length <= 105
  -104 <= nums[i] <= 104
*/

//Init. attempt => naive solution
var countSmaller = function(nums) {
  var counts = []; //result arr

  for (let i = 0; i < nums.length; i++) {
    let elementsToTheRight = nums.slice(i + 1),
        orderedElementsToTheRight = Array.from(elementsToTheRight).sort((a,b) => {return a - b}),
        currentCount = 0;

    if (elementsToTheRight.length === 0) {
      counts.push(0);
      break;
    }

    for (let j = 0; j < orderedElementsToTheRight.length; j++) {
      if (orderedElementsToTheRight[j] < nums[i]) {
        currentCount++;

        if (j === orderedElementsToTheRight.length - 1) {
          counts.push(currentCount);
        }

        continue;
      }

      counts.push(currentCount);
      currentCount = 0;
      break;
    }

  }
return counts;
};

//refactor after reviewing solutions
//I found this initially confusing, in spite of using this method intuitively immediately before (smallerNumsThanCurrent) what's going on:
  //we want to know how many numbers to the right are smaller for each of nums
  //as we are always evaluating to the right, all of the numbers to the left in sorted are smaller
    //we can delete current after evaluating as nothing to the left matters once we increment
var countSmaller = function(nums) {
  let numsSorted = [...nums].sort((a,b) => a-b),
      counts = [];

  for (let i = 0; i < nums.length; i++) {
    let index = numsSorted.indexOf(nums[i])
    counts.push(index);
    numsSorted.splice(index, 1)
  }

return counts;
}


console.log('[5,2,6,1] => [2,1,1,0]', JSON.stringify(countSmaller([5,2,6,1])) === JSON.stringify([2, 1, 1, 0]))
console.log('[-1] => [0]', JSON.stringify(countSmaller([-1])) === JSON.stringify([0]))
console.log('[-1,-1] => [0,0]', JSON.stringify(countSmaller([-1,-1])) === JSON.stringify([0,0]))
console.log('[0,1,2] => [0,0,0]', JSON.stringify(countSmaller([0,1,2])) === JSON.stringify([0,0,0]))
console.log('[2,0,1] => [2,0,0]', JSON.stringify(countSmaller([2,0,1])) === JSON.stringify([2,0,0]))
