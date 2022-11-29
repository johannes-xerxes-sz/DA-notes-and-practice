/* LC : 278. First Bad Version : Easy

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

e.g.
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

e.g.
Input: n = 1, bad = 1
Output: 1

Constraints:
  1 <= bad <= n <= 231 - 1
*/

/*------------------------------O(n)------------------------------------*/
var solution = function(isBadVersion) {
  return function(n) {
    //i = n - 1 because we know the current version is bad and we want to find the FIRST bad version
    for (let i = n - 1; i > 0; i--) {
      console.log(isBadVersion(i), i)
      if (isBadVersion(i)) {
        return i;
      }
    }
  };
};
/*-------------------------------O(log n)-------------------------------*/
var solution = function(isBadVersion) {
  return function(n) {
    let lowerLimit = 0;
    let upperLimit = n;


    while (upperLimit > lowerLimit) {
      let midPoint = Math.floor(lowerLimit + ((upperLimit - lowerLimit) / 2));

      if (!isBadVersion(midPoint)) {
        lowerLimit = midPoint + 1;
      }

      if (isBadVersion(midPoint)) {
        upperLimit = midPoint;
      }
    }
    //doesnt matter, return either 
    return upperLimit || lowerLimit;
  };
};
/*------------------------O(log n) HR era solu.-------------------------*/
var solution = function(isBadVersion) {
    return function(n) {
      var lowerLimit = 1,
          upperLimit = n;

      while (lowerLimit < upperLimit) {
        var midpoint = Math.floor(lowerLimit + (upperLimit - lowerLimit) / 2);

        if (isBadVersion(midpoint)) {
          upperLimit = midpoint;
          continue;
        }

        lowerLimit = midpoint + 1
      }
      return lowerLimit;
    };
};
