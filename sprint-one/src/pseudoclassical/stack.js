var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeStorage = 0;
  this.maxIndex;
};


Stack.prototype = {
  push: function(value){},
  pop: function(){},
  size: function(){
    return this.sizeStorage;
  },
  constructor: Stack
}