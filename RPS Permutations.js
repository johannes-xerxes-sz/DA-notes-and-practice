function rockPaperScissors() {
  let permutations = [],
      plays = ['rock', 'paper', 'scissors'];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        permutations.push([plays[i], plays[j], plays[k]] );
      }
    }
  }
  return permutations;
}

rockPaperScissors();