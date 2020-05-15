var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create new object
    // create storage unit
    // create a counter tracks the size of the storage unit
  // push methods in the object
  // return the object
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
  // declare a push function that will take in a value
    // if size counter reads 0
      // then the input value will be stored in storage with an index value of 0
      // increase the size counter by 1
    // otherwise
      // retrieve the indexes in storage and find the high number
      // the new index that will be used to store the input value will be that number
      // store the value in the new index

  // declare a pop function
    // retrieve the indexes in storage and find the lowest number
    // find that value that associated with that lowest number and save it
    // deleted the entry associated with the lowest number
    // the size counter is larger than 0, increase the size counter by one
    // return saved value

  // declare a size function
    // return the size counter
  push: function(value){

  },
  pop: function(){

  },
  size: function(){
    return this.sizeStorage;
  }
};


