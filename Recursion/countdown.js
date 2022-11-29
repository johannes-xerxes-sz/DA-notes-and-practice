function countdown(n){
  if (n < 1) {
    return [];
  }
  countdownArray = countdown(n - 1);
  countdownArray.unshift(n)
  return countdownArray
}
