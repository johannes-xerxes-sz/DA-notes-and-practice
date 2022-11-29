var sampleDNA = 'GCAT-GCAT-GCAT';
function dnaToRna(DNA) {
  var input = DNA;
  console.log(input)
  for (var i = 0; i < input.length - 1; i++) {
    console.log(input[i])
    if (input[i] === 'T') {
      input[i] = 'U'
    }
  }
  return input; 
}
dnaToRna('GCAT-GCAT-GCAT');
