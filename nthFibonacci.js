var nthFibonacci = function (n) {
  var resArr = [0,1];
  var temp1;
  var temp2;
  for (var i = 2; i <= n; i++) {
    resArr[i] = resArr[i - 2] + resArr[i - 1];
  }
  return resArr[n]
};
