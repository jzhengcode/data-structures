var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new object and point to stackMethods for any failed lookups
  // create storage unit property for new object
  // create a property that tracks the highest key among the keys in storage unit - call it max index?
  // create size counter proprty for new object
  // return the new object
};

var stackMethods = {
  // create push method that takes in value
    // if the size counter is 0
      // create an index 0 and assign the value taken in to the index 0
      // increase size counter by 1
    // otherwise
      // the new index to be added will be the max index + 1
      // tag the new index onto the value passed into the function
      // increase the size counter by 1
  // create pop method
    // find the value associated with max index and save it
    // delete the entry
    // if the size counter is greater than 0, decrease the counter by 1
    // return that value
  // create size method
    // return the size counter
};


