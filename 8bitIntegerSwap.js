/*
Given an unsigned 8-bit integer, swap its even and odd bits.
The 1st and 2nd bit should be swapped,
the 3rd and 4th bit should be swapped,
and so on.

e.g.
10101010 => 01010101
11100010 => 11010001

Bonus: Can you do this in one line?
*/
//
let bitIntegerSwap = (input) => {
  input = String(input).split('')
  for (let i = 0; i < input.length; i+=2) {
    let temp1 = input[i],
        temp2 = input[i + 1];

    input[i] = temp2
    input[i+1] = temp1
  }
  //necessary to return output as a string rather than a # so as to handle cases w/ leading 0's
  return input.join('')

}

console.log('10101010 => 01010101', bitIntegerSwap(10101010) === '01010101')
console.log('11100010 => 11010001', bitIntegerSwap(11100010) === '11010001')
