var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.store = storage;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var update = Object.keys(someInstance.store).length + 1;
    someInstance.store[update] = value;
  };

  someInstance.dequeue = function() {
    var valListEnd = someInstance.store[1];
    delete someInstance.store[1];
    return valListEnd;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.store).length;
  };

  return someInstance;
};
