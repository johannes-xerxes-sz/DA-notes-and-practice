var singleNumber = function(nums) {
    let testObj = {};

    for (let i = 0; i < nums.length; i++) {
        if (!testObj[nums[i]]) {
            testObj[nums[i]] = 1;
            continue;
        }
        if (testObj[nums[i]]) {
           delete testObj[nums[i]];
        }
    }
    return Object.getOwnPropertyNames(testObj)[0]
};
