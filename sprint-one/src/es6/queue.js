class Queue {
  constructor() {
    this.storage = {};
    this.sizeStorage = 0;
    this.maxIndex;
    this.minIndex;
  }

  enqueue(value) {
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
  }

  dequeue() {
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }

    var deq = this.storage[this.minIndex];
    delete this.storage[this.minIndex];
    this.minIndex++;
    return deq;
  }

  size() {
    return this.sizeStorage;
  }
}
