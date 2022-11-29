/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var max = -100,
      storage = {},
      res = [],
      resArr = [];
  
  for (var l of s) {
    if (!storage[l]) {
      storage[l] = 1;
    } else {
      storage[l] ++;
    }
    if (storage[l] > max) {
      max = storage[l];
    }
  }
  
  for (var l in storage) {
    resArr.push([l, storage[l]]);
  }
  
  resArr.sort(function(a, b) {
    return b[1] - a[1];
  });

  for (var i = 0; i < resArr.length; i++) {
    for (var j = 0; j < resArr[i][1]; j++) {
      res.push(resArr[i][0]);
    }
  }
  
  return res.join('');

};


frequencySort('tree')