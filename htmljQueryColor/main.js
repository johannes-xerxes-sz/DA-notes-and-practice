$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  var testArr =  $('p').text().split(' ')
  for (var i = 0; i < testArr.length - 1; i++) {
    var temp =testArr[i];
    if (testArr[i]) {
      testArr[i] = '<span>' + temp + '</span>';
    }
  }
  testArr = testArr.join(' ')
  $('p').html(testArr);



  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
// getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255)
  setInterval(function() {
    $('span').css('color', 'red')

  }, 1000)



  console.log(testArr)
});
