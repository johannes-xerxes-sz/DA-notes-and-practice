/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A"
*/

//Naive Solution
var numJewelsInStones = function(jewels, stones) {
  var count = 0;

  for (var i = 0; i < jewels.length; i++) {
    for (var j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++
      }
    }
  }

  return count
};

//Using Hashmap
var numJewelsInStones = function(jewels, stones) {
  var countObj = {},
      total = 0;

  for (var i = 0; i < stones.length; i++) {
    countObj[stones[i]] ? countObj[stones[i]]++ : countObj[stones[i]] = 1;
  }

  for (var j = 0; j < jewels.length; j++) {
    if (countObj[jewels[j]]) {
      total += countObj[jewels[j]]
    }
  }

  return total
};

console.log('aA, aAAbbbb => 3', numJewelsInStones('aA', 'aAAbbbb') === 3)
console.log('z, ZZ => 0', numJewelsInStones('z', 'ZZ') === 0)
