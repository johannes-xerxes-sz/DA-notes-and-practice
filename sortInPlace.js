/*  https://leetcode.com/problems/sort-colors/  */

var sortInPlace = function(nums) {
    var store = {};
    
    for (var i = 0; i < nums.length; i++) {
        if (store[nums[i]]) {
            store[nums[i]]++
        } else {
            store[nums[i]] = 1;
        }
    }

    for (var i = 0; i < nums.length; i++) {
        if (store[0]) {
          nums[i] = 0;
          store[0]--;
          continue;
        }
        if (store[1]) {
          nums[i] = 1;
          store[1]--;
          continue;
        }
        if (store[2]) {
          nums[i] = 2;
          store[2]--; 

        }
    }

    return nums

};
