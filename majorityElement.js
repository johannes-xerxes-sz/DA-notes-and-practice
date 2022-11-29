/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]

Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/
var majorityElement = function(nums) {
var boundary = nums.length / 3,
    store = {},
    result = [];

for (var i = 0; i < nums.length; i++) {
    if (store[nums[i]]) {
        store[nums[i]]++;
        if (store[nums[i]] > boundary) {
            result.push(nums[i]);
            store[nums[i]] = -Infinity;
        }
    }
    if (!store[nums[i]]) {
        store[nums[i]] = 1;
    }
}

return result;
};
