var pairs = (input) => {
  output = {};

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      output.push(input[i], input[j])
    }
  }
  return output
}

var uniquePairs = (input) => {
  output = {};

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      // output.push(input[i], input[j])
      if (output[input[i]+input[j]] || output[input[j]+input[i]]) {
        continue;
      }
      output[input[i]+input[j]] = true
    }
  }
  return output;
}
