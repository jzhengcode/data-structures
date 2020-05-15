var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeStorage = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
    } else {
      var update = Math.max(Object.keys(this.storage)) + 1;
      this.storage[update] = value;
    }

    this.sizeStorage++;
  },
  dequeue: function() {
    var oldestIndex = Math.min(...Object.keys(this.storage));
    var deq = this.storage[oldestIndex];
    delete this.storage[oldestIndex];
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }
    return deq;
  },
  size: function() {
    return this.sizeStorage;
  }
};


