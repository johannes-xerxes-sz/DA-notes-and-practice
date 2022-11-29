/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = new Set;
    
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]].sort();
          result.add(String(temp[0]) + String(temp[1]) + String(temp[2]))
        }
      }
    }  
  }
  for (let m = 0; m < result.length; m++) {
    let temp = []
    for (let n = 0; l <result[m].length; n++) {
    
    }
  }
};

threeSum([-1,0,1,2,-1,-4])