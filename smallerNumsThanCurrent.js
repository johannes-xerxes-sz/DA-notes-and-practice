/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that
j != i and nums[j] < nums[i].

Return the answer in an array.

e.g.
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

e.g.
Input: nums = [6,5,4,8]
Output: [2,1,0,3]

e.g.
Input: nums = [7,7,7,7]
Output: [0,0,0,0]

Constraints:
  2 <= nums.length <= 500
  0 <= nums[i] <= 100
*/

var smallerNumbersThanCurrent = function(nums) {
  var orderedNums = Array.from(nums).sort((a,b) => {return a-b;}),
      resultArr = [];

  for (var i = 0; i < nums.length; i++) {
    resultArr.push(orderedNums.indexOf(nums[i]))
  }

  return resultArr;
};


console.log('[8,1,2,2,3] => [4,0,1,1,3]', JSON.stringify(smallerNumbersThanCurrent([8,1,2,2,3])) === JSON.stringify([4,0,1,1,3]))
console.log('[6,5,4,8] => [2,1,0,3]', JSON.stringify(smallerNumbersThanCurrent([6,5,4,8])) === JSON.stringify([2,1,0,3]))
console.log('[7,7,7,7] => [0,0,0,0]', JSON.stringify(smallerNumbersThanCurrent([7,7,7,7])) === JSON.stringify([0,0,0,0]))
