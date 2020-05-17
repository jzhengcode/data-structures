var BinarySearchTree = function(value) {
  /*
  i- value
  o-sets it to an object
  c-none
  e-none
  will have an object to hold all values
  will have a left and right property each being objects 
  
  */
//  var newTree={
//   left:{},
//   right:{}
//  };
//    newTree.value=value;
  var newBinary={};
  newBinary.value=value
  newBinary.left = null;
  newBinary.right = null;
  extend(newBinary, searchMethod)
  return newBinary;
};
var extend = function(to, from){
  for(var key in from){
    to[key]=from[key];
  }

};
var searchMethod={};
searchMethod.insert = function (value) {
    /*
    I - some number value
    O - no output but side effect is will nest a new BST in current BST
    C - value has to be a number
    E - if the left or right property is occupied, move down BST 
    */
   //if this.value is undefined the create a new tree
   // if input value > current node value
     // and current node left isn't occupied
       // create new node
     // 

    var currentNode = this;
    if(currentNode.value > value){
      if (currentNode.left === null){
        currentNode.left = BinarySearchTree(value);
      } else {
        currentNode = currentNode.left;
        currentNode.insert(BinarySearchTree(value));
      }
    }

    if(currentNode.value < value){
      if (currentNode.right === null){
        currentNode.right = BinarySearchTree(value);
      } else {
        currentNode = currentNode.right;
        currentNode.insert(value);
      }
    }
   //if the value being passed in is greater than the first node set in this.right
   //if it is less than value put it into this.left 
}

searchMethod.contains = function(value) {
    /*
    I - some number value
    O - boolean
    C - value has to be a number
    E - none
    */
  };
  searchMethod.depthFirstLog = function(func) {
    /*
    I - some function
    O -  
    */
  };

/*
 * Complexity: What is the time complexity of the above functions?
 */
