var BinarySearchTree = function(value) {
  var newBinary = {};
  newBinary.value = value;
  newBinary.left = null;
  newBinary.right = null;
  extend(newBinary, searchMethod);
  return newBinary;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var searchMethod = {};
searchMethod.insert = function (value) {
  if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (value > this.value && this.right === null) {
    this.right = BinarySearchTree(value);
  } else if (value !== this.value && value < this.value) {
    var nextNode = this.left;
    nextNode.insert(value);
  } else if (value !== this.value && value > this.value) {
    var nextNode = this.right;
    nextNode.insert(value);
  }
};

searchMethod.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.value < target && this.left === null) {
    return false;
  } else if (this.value > target && this.right === null) {
    return false;
  } else if (target < this.value && this.left !== null) {
    var searching = this.left;
    return searching.contains(target);
  } else if (target > this.value && this.right !== null) {
    var searching = this.right;
    return searching.contains(target); 
  }

      
};
searchMethod.depthFirstLog = function(func) {
  func(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert & contain: O(log n)
 depthFirstLog: O(n)
 */
