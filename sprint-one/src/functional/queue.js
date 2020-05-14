var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.store = storage;
  var sizeStorage = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var entryName;
    if (sizeStorage === 0) {
      entryName = 0;
    } else {
      entryName = Math.max(...Object.keys(someInstance.store)) + 1;
    }

    someInstance.store[entryName] = value;
    sizeStorage++;
  };

  someInstance.dequeue = function() {
    var oldestIndex = Math.min(...Object.keys(someInstance.store));
    var valListEnd = someInstance.store[oldestIndex];
    delete someInstance.store[oldestIndex];
    if (sizeStorage > 0) {
      sizeStorage--;
    }
    return valListEnd;
  };

  someInstance.size = function() {
    return sizeStorage;
  };

  return someInstance;
};