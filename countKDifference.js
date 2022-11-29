/*
Given an integer array nums and an integer k, return the number of pairs (i, j)
where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:
    x if x >= 0.
    -x if x < 0.

e.g.
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

e.g.
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

e.g.
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]

Constraints:
    1 <= nums.length <= 200
    1 <= nums[i] <= 100
    1 <= k <= 99
*/

var countKDifference = function(nums, k) {
  let res = 0;

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j] && Math.abs(nums[i] - nums[j]) === k) {
        res++
      }
    }
  }
  return res
};
