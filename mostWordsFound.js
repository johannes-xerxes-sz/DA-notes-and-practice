var mostWordsFound = function(sentences = ['i am cool', 'i am very cool', 'i am very very cool']) {
  var mostWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    let currentSentence = sentences[i].trim().split(' ');

    currentSentence.length > mostWords ?
      mostWords = currentSentence.length :
      mostWords = mostWords;
    }

return mostWords;
};

console.log("mostWordsFound(['i am cool', 'i am very cool', 'i am very very cool']) === 5", mostWordsFound(['i am cool', 'i am very cool', 'i am very very cool']) === 5)
