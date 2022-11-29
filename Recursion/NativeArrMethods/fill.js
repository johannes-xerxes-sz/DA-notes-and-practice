let fill = (times, number) => {
  if (times <= 0) {
    return [];
  }

  let filler = fill(times - 1, number)
  filler.push(number);
  return filler;
  
}

fill(5, 1)
