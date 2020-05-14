var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeStorage = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    if (this.sizeStorage === 0) {
      // this.storage[0] = value;
      // this.sizeStorage++;
      this.storage[0] = value;
      this.sizeStorage++;
    } else {
      var maxIndex = Math.max(Object.keys(this.storage));
      var update = maxIndex + 1;
      this.storage[update] = value;
      this.sizeStorage++;
    }
  },
  pop: function() {
    debugger;
    var keys = Object.keys(this.storage);
    var maxIndex = Math.max(...Object.keys(this.storage));
    var popped = this.storage[maxIndex];
    delete this.storage[maxIndex];

    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }

    return popped;
  },
  size: function() {
    return this.sizeStorage;
  }
};