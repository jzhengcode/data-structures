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

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
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


