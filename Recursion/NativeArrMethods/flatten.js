var flatten = function(arr) {
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArr.push(...flatten(arr[i]))
    } else {
      resultArr.push(arr[i])
    }
  }
  return resultArr;
}


flatten([0,1,[2,[3,4,[5]]],6])
