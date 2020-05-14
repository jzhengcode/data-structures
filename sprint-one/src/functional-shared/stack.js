var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeStorage = 0;
  extend(someInstance, stackMethods);
  return someInstance;

  // create the new object
  // create a storage unit to hold the stack
  // extend the methods created below into the created object
  // return the created object
};

var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  // assign a function to the push property that will take in a value
    // if the storage unit is empty
      // the value added will be indexed at 0 in the storage unit
    // otherwise
     // find what the current highest index in the storage unit is
     // otherwise the value added will be indexed as one greater the current max index
    // increase the storage size counter after these operations are complete
  // assign a function to the pop property
    // find the highest index in the storage unit
    // find the value at the highest index in the storage unit and save that value
    // delete property at the highest index
    // if the size counter empty, decrease the counter by 1
    // return the value that was saved early
  // assign a function to the size property
    // find the current value in the size counter
    push: function(value) {
      if (this.sizeStorage === 0) {
        // this.storage[0] = value;
        // this.sizeStorage++;

        var update = this.storage + 1;
        this.storage[update] = value;
        this.sizeStorage++;
      } else {
        var maxIndex = Math.max(Object.keys(this.storage));
        var update = maxIndex + 1;
        this.storage[update] = value;
        this.sizeStorage++;
      }
    },
    pop: function(){
      var maxIndex = Math.max(Object.keys(this.storage));
      var popped = this.storage[maxIndex];
      delete this.storage[maxIndex];

      if (this.sizeStorage > 0) {
        this.sizeStorage--;
      }

      return popped;
    },
    size: function(){
      return this.sizeStorage;
    }
};