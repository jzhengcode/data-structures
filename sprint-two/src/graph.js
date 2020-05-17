// I - Nothing
// O - a function that creates a network of nodes that are interconnected
// C - output has to be a function
// E - no edge cases

// The purpose of calling this class is to create a network of nodes that are interconnected with each other. These nodes all have the same set of prototype methods

// Explanation: the Graph class it self have inputs but the protoype methods that it passes failed loop ups to do. The output of Graph will instaite a new network of graphs that all share prototype methods

// Instantiate a new graph
var Graph = function() {
  // has nodes array - storage potential nodes that it can be connected to
  // edge object - storages the reference to the nodes
  var newNode = Object.create(Graph.prototype);
  newNode.nodes = [];
  newNode.edges = {};
  return newNode;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  /* 
  I - some node
  O - none, side effect: node is added to the graph
  C - none
  E - none 
  */

  // Explanation: Will add an input node to the nodes array in the graph

  // input node position in nodes array will have index of a number that's the length of the array
  // put node into nodes array
  // put reference in edges object

  var index = this.nodes.length;
  this.nodes.push(node);
  this.edges[index] = [];  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  /*
  I - some node
  O - boolean
  C - none
  E - none
  */
  //Explanation: will look through nodes array to see if node exists
  
  for (var i = 0; i < this.nodes.length; i++){
    if(this.nodes[i] === node){
      return true;
    }
    return false;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  /* 
  I - some node
  O - nothing, side effect is the graph changes -> something is removed
  C - node has to exist inside the graph
  E - if the node doesn't exist inside the graph, don't do anything  
   */
  
// Explanation: will traverse through the graph, if there is a node, remove it -> have to remove from edges

// check in nodes array to see if node exists
// if it does
  // removed from nodes and edges -> have to set to undefined or else nodes will shift

  var index = this.nodes.indexOf(node);

  if (index > -1){
    this.nodes[index] = undefined;
    this.nodes[index] = undefined;
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.f
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


