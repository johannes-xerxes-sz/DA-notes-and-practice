var removeDuplicates = function(nums) {
    let testArr = {};

    for (let i = 0; i < nums.length; i++) {
        if (!testArr[nums[i]]) {
            testArr[nums[i]] = 'present';
            continue;
        }
        if (testArr[nums[i]]) {
            nums.splice(i,1)
            i--
        }
    }
return nums.length
};
