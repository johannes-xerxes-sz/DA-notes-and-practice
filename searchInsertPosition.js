var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        if (nums[i] > target) {
            return i;
        }
        if (i === nums.length - 1) {
          return nums.length
        }
    }
};
