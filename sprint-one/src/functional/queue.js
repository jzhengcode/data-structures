var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.store = storage;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var entryName;
    if (Object.keys(someInstance.store).length === 0){
      entryName = 0;
    } else {
      entryName = Math.max(Object.keys(someInstance.store)) + 1;
    }

    someInstance.store[entryName] = value;
  };

  someInstance.dequeue = function() {
    var oldestIndex = Math.min(...Object.keys(someInstance.store));
    var valListEnd = someInstance.store[oldestIndex];
    delete someInstance.store[oldestIndex];
    return valListEnd;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.store).length;
  };

  return someInstance;
};