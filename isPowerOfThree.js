var isPowerOfThree = function(n) {
  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  if (n === 2) {
    return false;
  }

  if (n === 3) {
    return true;
  }

  while (n > 3) {
    if (n % 3 === 0) {
      n = n / 3;
    }

    if (n % 3 !== 0) {
      return false;
    }

    if (n === 3) {
      return true;
    }
  }
};
