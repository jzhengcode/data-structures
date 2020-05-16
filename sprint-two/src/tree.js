var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
  
};

var extend = function(to, from){
  for(var key in from){
    to[key]=from[key];
  }

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  /*should invoke a new tree
  new tree should be placed in newtree.children */
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
 
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {

      for (var i = 0; i < this.children.length; i++) {
        // if ^ returns true, exit loop
        if (this.children[i].contains(target) === true) {
          return true;
        }
        // otherwise, continue looping
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
