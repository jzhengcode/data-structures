var BinarySearchTree = function(value) {
  /*
  i- value
  o-sets it to an object
  c-none
  e-none
  will have an object to hold all values
  will have a left and right property each being objects 
  
  */
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

    // if the input value is smaller than the value at the current node and the left property is empty
      // make node in left node
    // if the inout value is bigger than the value at the current node and the right property is empty
      // make node in right node
    // if the input value doesn't already exist and is smaller than the current current value
      // run insert on the right node
    // if the input value doesn't already exist and is bigger than the current current value
      // run insert on the left node

   if (value < this.value && this.left === null) {
     this.left = BinarySearchTree(value);
   } else if (value > this.value && this.right === null){
     this.right = BinarySearchTree(value);
   } else if (value !== this.value && value < this.value){
     var nextNode = this.left;
     nextNode.insert(value);
   } else if (value !== this.value && value > this.value){
     var nextNode = this.right;
     nextNode.insert(value);
   }
}

searchMethod.contains = function(target) {
    /*
    I - some number value
    O - boolean
    C - value has to be a number
    E - none
    */

    // if the value at the current node matches the input value
      // return true;
    // if the input value is lower but left node is
      // return false
    // if the input value higher but the right node is empty
      // return false
    // if input value is higher and the right node isn't empty
      // call method on the right node
   // if input value is lower and the left node isn't empty
      // call method on left node
    
    if(this.value === target){
      return true;
    } else if (this.value < target && this.left === null){
      return false;
    } else if (this.value > target && this.right === null){
      return false;
    } else if (target < this.value && this.left !== null) {
      var searching = this.left;
      return searching.contains(target);
    } else if (target > this.value && this.right !== null){
      var searching = this.right;
      return searching.contains(target); 
    }

        
  };
  searchMethod.depthFirstLog = function(func) {
    /*
    I - some function that takes in the current node vale
    O -  there is no output but side effect
    C - input has to be a function
    E - none
    */

    // run into function on current node value

    // if the left node isn't empty
      // run function on left node

    // if the right node isn't empty
      // run function on right node

    func(this.value);

    if(this.left !== null){
      this.left.depthFirstLog(func);
    }

    if(this.right !== null){
      this.right.depthFirstLog(func);
    }
  };

/*
 * Complexity: What is the time complexity of the above functions?
 insert & contain: O(log n)
 depthFirstLog: O(n)
 */
