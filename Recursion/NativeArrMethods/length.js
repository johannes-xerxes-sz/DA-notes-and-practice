let stringLength = str => {
  if (str[0] === undefined) {
    return 0;
  }

  return stringLength(str.substring(1)) + 1
}

strLength('abcd ')
