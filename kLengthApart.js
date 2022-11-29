/*
1437. Check If All 1's Are at Least Length K Places Away
Easy

Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

e.g.
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.

e.g.
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.

Constraints:
  1 <= nums.length <= 105
  0 <= k <= nums.length
  nums[i] is 0 or 1
*/

//initial solution
var kLengthApart = function(nums, k) {
  let indexes = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      indexes.push(i);
    }

    if (indexes.length > 1) {
      if ((indexes[indexes.length - 1] - indexes[indexes.length - 2]) <= k) {
        return false;
      } else {
        indexes.shift()
      }
    }
  }

  return true;
};

//refactor
var kLengthApart = function(nums, k) {
  let count = k;

  for (num of nums) {
    if (num === 1) {
      if (count < k) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }

  }

  return true
};
