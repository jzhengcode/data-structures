var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.store = storage;
  var sizeStorage = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // var update = Object.keys(someInstance.store).length + 1;
    var update = sizeStorage + 1;
    someInstance.store[update] = value;
    sizeStorage++;
  };

  someInstance.pop = function() {
    // var mostRecent = Object.keys(someInstance.store).length;
    var mostRecent = sizeStorage;
    var popped = someInstance.store[mostRecent];
    delete storage[mostRecent];
    if (sizeStorage > 0) {
      sizeStorage--;
    }
    return popped;
  };

  someInstance.size = function() {
    // return Object.keys(someInstance.store).length;
    return sizeStorage;
  };

  return someInstance;
};