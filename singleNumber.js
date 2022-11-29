var singleNumber = function(nums) {
    var store = {}
    for (var i = 0; i < nums.length; i++) {
        if (!store[nums[i]]) {
            store[nums[i]] = 1;
        } else {
          store[nums[i]]++
        }
        if (store[nums[i]] === 2) {
          delete store[nums[i]];
        }
    }
    return Number(Object.keys(store)[0]);
};

singleNumber([2,2,1])