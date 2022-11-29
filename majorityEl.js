/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

e.g.
Input: nums = [3,2,3]
Output: [3]

e.g.
Input: nums = [1]
Output: [1]

e.g.
Input: nums = [1,2]
Output: [1,2]

Constraints:
  1 <= nums.length <= 5 * 104
  -109 <= nums[i] <= 109
*/

let majorityElement = (nums) => {
  let divisor = nums.length / 3,
      obj = {},
      output =[];

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++
    }

    if (obj[nums[i]] > divisor) {
      obj[nums[i]] = -Infinity;
      output.push(nums[i])
    }
  }

  return output;
};
