// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {

//   digits[digits.length - 1]++;

//   if(digits[digits.length -1] > 9) {
//     let temp = String(digits.pop()).split('');
//     if (digits.length === 0) {
//       return temp;
//     }
//     digits.concat(temp);
//   }

//   return digits;
// };

// plusOne([9])


var plusOne = function(digits) {
  let tempString = '';
  for (el of digits) {
    tempString += el
  }
  let tempNumber = Number(tempString);
  tempNumber++
  tempString = String(tempNumber).split('')

  for (var i = 0; i < tempString.length; i++) {
   tempString[i] = Number(tempString[i])
  }

  return tempString
};


plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
