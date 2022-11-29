/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j
*/

var numIdenticalPairs = function(nums) {
  var store = [];

  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] == nums[j]) {
        if (store.includes([j,i].join(''))) {
          continue;
        }
        store.push([i,j].join(''))
      }

    }
  }

  return store.length;
};


console.log('[1,2,3,1,1,3] => 4', numIdenticalPairs([1,2,3,1,1,3]) === 4)
console.log('[1,1,1,1] => 6', numIdenticalPairs([1,1,1,1]) === 6)
console.log('[1,2,3] => 0', numIdenticalPairs([1,2,3]) === 0)
