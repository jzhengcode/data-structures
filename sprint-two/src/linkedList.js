/*
i-
o
c
e

*/

// containingarray = [[12, three = containingArray[1][0]],[3, crap]]

// head-->node --->next.node--->next.node---tail.lastnode

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    /*
i- value
o- no output but side effect the new value is the new tail
c-none
e-

justification - add value to the list and assign said value to propert tail



takes in value call the node class and create new node
changes list.tail to the newly created node
size of the linked list increases
return the new node to the array container
if!(head and tail point to the same node) 
  update node.next to point to the next value 
*/
if( this.head === null && this.tail === null){
  var first = Node(value)
  this.head = first
  this.tail= first
  this.list=first
} else {
  var current = this.list;

  while(current.next !== null){
    current = current.next;
  }

  var newNode = Node(value);
  current.next = newNode;
  this.tail = newNode;
}
  };

  list.removeHead = function() {
    // var currentNext = this.list.next;
    // var removed = this.list.value;
    // // delete this.head;
    // delete this.list;
    // this.head = currentNext;
    // return removed;

    // var remove = this.list.value;
    // this.head = this.list.next;
    // return remove;

    // make var to store next of the first node
    var updatedHead = this.list.next;
    var remove = this.head.value;
    this.list=this.list.next;
    this.head = updatedHead;

    return remove;

  };

  list.contains = function(target) {
    var hasTarget = false;
    var current = this.head;
    if(this.tail.value === target){
      hasTarget= true;
    } else {
    while(current.next !== null){
      if (current.value === target){
        hasTarget = true;
        break;
      }
      current = current.next;  
    }
  }

    
    return hasTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 var test= LinkedList();
 test.addToTail(7);
 console.log(test);