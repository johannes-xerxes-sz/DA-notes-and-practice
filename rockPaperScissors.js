var rockPaperScissors = function () {
  var possiblePermutations = [];
  var potenMoves = ['rock', 'paper', 'scissors'];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        possiblePermutations.push([potenMoves[i], potenMoves[j], potenMoves[k]]);
      }
    }
  }

  return possiblePermutations;
};
