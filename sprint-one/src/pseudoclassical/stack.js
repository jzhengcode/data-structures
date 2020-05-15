var Stack = function() {
  this.storage = {};
  this.sizeStorage = 0;
  this.maxIndex;
};


Stack.prototype = {
  push: function(value) {
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
      this.maxIndex = 0;
      this.sizeStorage++;
    } else {
      this.storage[this.maxIndex + 1] = value;
      this.maxIndex++;
      this.sizeStorage++;
    }
  },
  pop: function() {
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }

    var pop = this.storage[this.maxIndex];
    delete this.storage[this.maxIndex];
    this.maxIndex--;
    return pop;
  },
  size: function() {
    return this.sizeStorage;
  },
  constructor: Stack
};