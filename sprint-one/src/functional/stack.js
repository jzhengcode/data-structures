var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.store = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    var update = Object.keys(someInstance.store).length + 1;
    someInstance.store[update] = value;
  };

  someInstance.pop = function() {
    var mostRecent = Object.keys(someInstance.store).length;
    var popped = someInstance.store[mostRecent];
    delete storage[mostRecent];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.store).length;
  };

  return someInstance;
};