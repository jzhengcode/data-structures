var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeStorage = 0;
  this.maxIndex;
  this.minIndex;
};

Queue.prototype = {
  enqueue: function(value) {
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
      this.minIndex = 0;
      this.maxIndex = 0;
      this.sizeStorage++;
    } else {
      this.storage[this.maxIndex + 1] = value;
      this.maxIndex++;
      this.sizeStorage++;
    }
  },
  dequeue: function() {
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }

    var deq = this.storage[this.minIndex];
    delete this.storage[this.minIndex];
    this.minIndex++;
    return deq;
  },
  size: function() {
    return this.sizeStorage;
  },
  constructor: Queue
};