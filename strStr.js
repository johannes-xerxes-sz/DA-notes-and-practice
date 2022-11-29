// return index first occurence of 'needle' in 'haystack'
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    for (var i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1
};
