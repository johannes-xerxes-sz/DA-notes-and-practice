var containsDuplicate = function(nums) {
  var duplicateCount = {};
  for (var i = 0; i < nums.length; i++) {
    if (!duplicateCount.hasOwnProperty([nums[i]])) {
      duplicateCount[nums[i]] = 1;
    } else {
        return true;
    }
  }
  return false;
};
containsDuplicate([1,2,3])