var bubbleSort = function(array) {
  var stillSorting = false;
  for (var i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      stillSorting = true;
      var temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
    }
  }
  if (stillSorting) {
    stillSorting = false;
    bubbleSort(array);
  }
  return array;
};
