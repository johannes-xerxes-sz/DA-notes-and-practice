var firstNonRepeatedCharacter = function(string) {
   var strArr = string.split('');
   var last = strArr[0];
   var ltrObj = {}
   for (var i = 0; i < strArr.length; i++) {
     if(!ltrObj[strArr[i]]) {
       ltrObj[strArr[i]] = 1;
     } else {
       ltrObj[strArr[i]] += 1;
     }
   }
     for (var j = 0; j < strArr.length; j++) {
       if(strArr[j] !== last) {
         last = strArr[j];
       }
       if (ltrObj[last] === 1) {
         return strArr[j];
       }
     }
 };
