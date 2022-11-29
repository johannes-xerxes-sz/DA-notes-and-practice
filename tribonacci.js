var tribonacci = (signature, n) => {
  let returnArr = signature;

  for (let i = 2; i < n - 1; i++) {
    returnArr.push(returnArr[i] + returnArr[i - 1] + returnArr[i - 2])
  }

  return returnArr.slice(0,n)
}




console.log('tribonacci([0, 0, 1], 9) === [0, 0, 1, 1, 2, 4, 7, 13, 24]', JSON.stringify(tribonacci([0, 0, 1], 9)) === JSON.stringify([0, 0, 1, 1, 2, 4, 7, 13, 24]))
console.log('tribonacci([1, 1, 1], 5) === [1, 1, 1, 3, 5]', JSON.stringify(tribonacci([1, 1, 1], 5)) === JSON.stringify([1, 1, 1, 3, 5]))
console.log('tribonacci([1, 2, 3], 2) === [1, 2]', JSON.stringify(tribonacci([1, 2, 3], 2)) === JSON.stringify([1, 2]))
