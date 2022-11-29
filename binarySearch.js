/* LC : 704. Binary Search : Easy

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

e.g.
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

e.g.
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
  1 <= nums.length <= 104
  -104 < nums[i], target < 104
  All the integers in nums are unique.
  nums is sorted in ascending order.
*/

/*-------------------------------O(log n)-------------------------------*/
let search = (nums, target) => {
  let lowerLimit = 0;
  let upperLimit = nums.length;

  while(lowerLimit <= upperLimit) {
    let midPoint = Math.floor(lowerLimit + ((upperLimit - lowerLimit) / 2));

    if (nums[midPoint] === target) {
      return midPoint;
    }
    if (nums[midPoint] > target) {
      upperLimit = midPoint - 1;
    }
    if (nums[midPoint] < target) {
      lowerLimit = midPoint + 1;
    }

  }

  return -1;
}





/*--------------------------------TESTS---------------------------------*/
console.log( 'search([1,2,3,4,5,6,7,8,9,10], 2) => 1', search([1,2,3,4,5,6,7,8,9,10], 2) === 1 )
console.log( 'search([-1,0,3,5,9,12], 9) => 4', search([-1,0,3,5,9,12], 9) === 4 )
