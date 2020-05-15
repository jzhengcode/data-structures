var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance.storage = {};
  newInstance.maxIndex = 0;
  newInstance.sizeStorage = 0;
  return newInstance;
};

var stackMethods = {
  push: function(value) {
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
      this.sizeStorage++;
    } else {
      var update = this.maxIndex + 1;
      this.storage[update] = value;
      this.sizeStorage++;
      this.maxIndex++;
    }
  },
  pop: function() {
    var currentMax = this.maxIndex;
    var pop = this.storage[currentMax];
    delete this.storage[currentMax];
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }
    if (this.maxIndex > 0) {
      this.maxIndex--;
    }
    return pop;
  },
  size: function() {
    return this.sizeStorage;
  },
};