var longestCommonPrefix = function(strs) {
    var prefix = strs[0];

    for (var i = 1; i < strs.length; i++) {
      if (strs[i].length === 0) {
        return '';
      }
      for (var j = 0; j < strs[i].length; j++) {
        if (prefix[j] !== strs[i][j]) {
          prefix = strs[i].slice(0,j);
          break;
        }
        if (strs[i].length - 1 === j) {
          prefix = strs[i]
        }
      }
    }

return prefix
};



longestCommonPrefix(["flower","flow","flight"]) === 'fl'
