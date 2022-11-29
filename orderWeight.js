/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

e.g.
"56 65 74 100 99 68 86 180 90" =>
"100 180 90 56 65 74 68 86 99"

-When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
  -180 is before 90 since, having the same "weight" (9), it comes before as a string.
-All numbers in the list are positive numbers and the list can be empty.
-it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
-For C: The result is freed.


*/
function orderWeight(strng) {
  var splitted = strng.split(' '),
      weightedObj ={},
      weightedArr = [];
//handle empty input;
  if (strng.length === 0) {
    return '';
  }
//convert weights to sums of their digits & add them to an arr & hash map
  for (var i = 0; i < splitted.length; i++) {
    var sum = 0;
    for (var j = 0; j < splitted[i].length; j++) {
      sum += Number(splitted[i][j]);
      if (j === splitted[i].length - 1) {
        weightedArr.push(sum);
        //if weightedObj already includes sum, add 2nd weight delineated by space
        if (weightedObj[sum]) {
          weightedObj[sum] = weightedObj[sum] + ' ' + splitted[i];
          continue;
        }
        weightedObj[sum] = splitted[i];
        sum = 0;
      }
    }
  }
  // check for properties w/ more than one value, and sort them as strings
  for (each in weightedObj) {
    if (weightedObj[each].split(' ').length > 1) {
      weightedObj[each] = weightedObj[each].split(' ').sort()
    }
  }
  //pre-sort arr ascending by sum
  weightedArr.sort((a,b) => {return a - b})
  //sums->weights
  for (var i = 0; i < weightedArr.length; i++) {
    if (weightedObj[weightedArr[i]].length > 0 && typeof weightedObj[weightedArr[i]] === 'object') {
      weightedArr[i] = weightedObj[weightedArr[i]].shift();
      continue;
    }
    weightedArr[i] = weightedObj[weightedArr[i]]
  }
  //arr->string
  return weightedArr.join(' ')
}


console.log("103 123 4444 99 2000 => 2000 103 123 4444 99", orderWeight("103 123 4444 99 2000") === "2000 103 123 4444 99" )
console.log("2000 10003 1234000 44444444 9999 11 11 22 123 => 11 11 2000 10003 22 123 1234000 44444444 9999", (orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123") === "11 11 2000 10003 22 123 1234000 44444444 9999")
