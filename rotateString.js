/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

Note:
  A and B will have length at most 100.
*/
var rotateString = function(A, B) {
    if (A.length === 0 && B.length === 0) {
        return true;
    }
    if (A.length !== B.length) {
        return false;
    }


    for (var i = 0; i < A.length; i++) {
        var splitted = A.split('');
        splitted.push(splitted.shift());
        A = splitted.join('');

        if (A === B) {
            return true;
        }
    }
    return false;
};
