var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.sizeStorage = 0;
  newInstance.maxIndex = 0;
  newInstance.minIndex;
  return newInstance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
      this.minIndex = 0;
      this.sizeStorage++;
    } else {
      var update = this.maxIndex + 1;
      this.storage[update] = value;
      this.maxIndex++;
      this.sizeStorage++;
    }
  },
  dequeue: function() {
    var deq = this.storage[this.minIndex];
    delete this.storage[this.minIndex];
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
      this.minIndex++;
    }
    return deq;
  },
  size: function() {
    return this.sizeStorage;
  }
};


