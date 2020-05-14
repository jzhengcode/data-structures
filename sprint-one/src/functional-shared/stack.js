var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  return someInstance;

  // create the new object
  // create a storage unit to hold the stack
  // extend the methods created below into the created object
  // return the created object
};

var stackMethods = {
  // assign a function to the push property that will take in a value
    // if the storage unit is empty
      // the value added will be indexed at 0 in the storage unit
    // otherwise
     // find what the current highest index in the storage unit is
     // the value add will be indexed at indexed at one more the current highest index
  // assign a function to the pop property
    // find the highest index in the storage unit
    // find the value at the highest index in the storage unit and save that value
    // delete property at the highest index
    // return the value that was saved early
  // assign a function to the size property
};


