function wave(){
  let inputSplitted = arguments[0].split(''),
      res = [];

  
  for (var i = 0; i < inputSplitted.length; i++) {
    inputSplitted[i] = inputSplitted[i].toUpperCase()
    res.push(inputSplitted.join(''));
    inputSplitted[i] = inputSplitted[i].toLowerCase()
  }
  
  return res;
}

wave(' cameron fielder')

