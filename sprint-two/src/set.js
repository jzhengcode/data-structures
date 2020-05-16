var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // I - some string
  // O - nothing. side effect, storage in set should be updated
  // C - constraints. has to be a string
  // E - if the string already exists into the storage, then don't add it

  //if the item isn't a property in the storage
    // store the item as a property
  // otherwise, return
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  } 
  
  return;
};

setPrototype.contains = function(item) {
  // I - some string
  // O - boolean
  // C - item must be a string. output must be a boolen
  // E - none

  // if item is a property in the storage
    // return true
  //otherwise
    // return false
  if (this._storage[item] === item) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  /*
  i-string
  o-returns nothing, #side effect its deletes item
  c-must be a string
  e-none, but if string doesnt exist then nothing should naturaly happen
  */
 //it search the object for item and delete that key value pair 
};

/*
 * Complexity: What is the time complexity of the above functions? - O(1)
 */
