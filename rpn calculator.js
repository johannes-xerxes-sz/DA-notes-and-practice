function calc(expr) {
  let res = 0,
      arrayed = expr.split(' ');
  for (var i = 0; i < arrayed.length; i++) {
    let temp = '';
    temp += arrayed[i];
    if (arrayed[i] === '+' || arrayed[i] === '-' || arrayed[i] === '*' || arrayed[i] === '/') {
      for (var j = 0; j < temp.length; j++) {
        
      }
    }
  }
  return 0;
}

calc('1 2 3 * 5 4')