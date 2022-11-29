/* LC : 53. Maximum Subarray : Medium

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

e.g.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

e.g.
Input: nums = [1]
Output: 1

e.g.
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
 
/*--------------------------------O(n^2)--------------------------------*/
var maxSubArray = (nums) => {
  let maximum = -Infinity;

  if (nums.length === 1)  {
    maximum = nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    //handle nums[i] by itself greatest subArray
    if (sum > maximum) {
      maximum = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      if (sum > maximum) {
        maximum = sum;
      }
    }
  }

  return maximum;
};




/*--------------------------------TESTS---------------------------------*/
console.log('maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) => 6', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) === 6)
console.log('maxSubArray([1]) => 1', maxSubArray([1]) === 1)
console.log('maxSubArray([5,4,-1,7,8]) => 23', maxSubArray([5,4,-1,7,8]) === 23)
console.log('maxSubArray([-2,25,-11]) => 25', maxSubArray([-2,25,-11]) ===  25)
console.log('maxSubArray([-2,1]) => 1'
