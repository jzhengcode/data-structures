class Stack {
  constructor() {
    this.storage = {};
    this.sizeStorage = 0;
    this.maxIndex;
  }

  push(value){
    if (this.sizeStorage === 0) {
      this.storage[0] = value;
      this.maxIndex = 0;
      this.sizeStorage++;
    } else {
      this.storage[this.maxIndex + 1] = value;
      this.maxIndex++;
      this.sizeStorage++;
    }
  }

  pop(){
    if (this.sizeStorage > 0) {
      this.sizeStorage--;
    }

    var pop = this.storage[this.maxIndex];
    delete this.storage[this.maxIndex];
    this.maxIndex--;
    return pop;
  }

  size(){
    return this.sizeStorage;
  }
}