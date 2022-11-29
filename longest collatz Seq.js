/*
A Collatz sequence in mathematics can be defined as follows. 
Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1

It is conjectured that every such sequence eventually reaches the number 1.
Test this conjecture.
*/

var testCollatz = n => {
  while (n!== 1) {
    if (n % 2 !== 0) {
      n = (3 * n) + 1;
      console.log('odd', n);
    }
    if (n % 2 === 0) {
      n = n / 2;
      console.log('even', n);
    }
  }
  return 'true, input reduced to 1!'
}

// testCollatz(5)

//Bonus: What input n <= 1000000 gives the longest sequence?

var findLongestCollatzSequenceUnder1000000 = () => {
  let longestSequence = -Infinity,
      longestSequenceNumber;
 
  for (var i = 2; i <= 1000000; i++) {
    let currentSequence = [],
        temp = i;

    while (temp!== 1) {
      if (temp % 2 !== 0) {
        temp = (3 * temp) + 1;
        currentSequence.push(temp);
      }
      if (temp % 2 === 0) {
        temp = temp / 2;
        currentSequence.push(temp);
      }
    } 

    if (currentSequence.length > longestSequence) {
      longestSequence = currentSequence.length;
      longestSequenceNumber = i;
    }

  }
  
  return longestSequenceNumber;
}

findLongestCollatzSequenceUnder1000000();