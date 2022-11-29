var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function telephoneWords (digitString) {
  var s = digitString,
      r = [],
      t = '';
  helper(0, t, s, r);
  return r;
}

function helper(c, t, s, r) {
  if (c === 4) {
    r.push(t);
    return;
  }
  for (var q = 0; q < phoneDigitsToLetters[s[c]].length; q++) {
    t += phoneDigitsToLetters[s[c]][q];
    helper(c + 1, t, s, r);
    t = t.slice(0, c);
  }
}
