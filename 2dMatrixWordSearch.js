/*
Given a 2D matrix of characters and a target word, write a function that returns
whether the word can be found in the matrix by going left-to-right, or up-to-down.
For example, given the following matrix:
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
target = 'FOAM' = true;
target = 'MASS' = true;
*/

var matrixWordSearch = function(arr, target) {
  var wasFound = new Array(target.length).fill(false);
  console.log(wasFound)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        
    }
  }
}

matrixWordSearch(
  [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
  ], 'FOAM');