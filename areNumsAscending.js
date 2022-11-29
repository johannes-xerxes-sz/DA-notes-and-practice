var areNumbersAscending = function(s) {
  let numbers = s.split(' ').map(element => Number(element)),
      current = 0;

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
      if (current === 0) {
        current = numbers[i];
        continue;
      }
      if (numbers[i] > current) {
        current = numbers[i];
        continue;
      }
      if (numbers[i] <= current) {
        return false;
      }
    }
  }
  return true;
};

areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
