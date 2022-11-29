//challenge is to sum two strings as numbers;
//!!challenge is to complete this in instances in which the
//inputs are long enough to cause trouble!!
function sumStrings(a,b) { 
  if (a.length > 15 || b.length > 15) {
    let temp1 = [],
        temp2 = [];
    for (var i = 0; i < Math.max(a.length,b.length); i += 15) {
      temp1.push(a.slice(i, i + 15))
      temp2.push(b.slice(i, i + 15))
    }
    console.log('here',temp1, temp2)
  }
}

sumStrings('712569312664357328695151392', '8100824045303269669937')
console.log(712569312664357328695151392 + 8100824045303269669937)