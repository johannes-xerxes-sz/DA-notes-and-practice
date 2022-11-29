/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, val) {
    var i = getIndexBelowMaxForKey(key, storageLimit),
        tempStorage = storage[i] || []
        needOne = false;

        this.storage[i] = tempStorage;

        for (var each of tempStorage) {
          if (key === each[0]) {
            each[1] === val;
            needOne = !needOne;
          }
        }

      if (!needOne) {
        tempStorage.push([key,val]);
        count++
      }
      if (count > (storageLimit *.75)) {
        storageLimit *= 2;
      }
  };

  result.retrieve = function(key) {
    var i = getIndexBelowMaxForKey(key, storageLimit),
        tempStorage = this.storage[i] || [];

      if(!tempStorage) {
        return undefined;
      }

      for (var each of tempStorage) {
          if (key === each[0]) {
            return each[1];
          }
        }

     return undefined;
  };

  result.remove = function(key) {
    // TODO: implement `remove`
  };

  return result;
};
