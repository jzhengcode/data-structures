
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToTail = function(value) {
    if (this.head === null && this.tail === null) {
      var first = Node(value);
      this.head = first;
      this.tail = first;
      this.list = first;
    } else {
      var current = this.list;

      while (current.next !== null) {
        current = current.next;
      }

      var newNode = Node(value);
      current.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    var updatedHead = this.list.next;
    var remove = this.head.value;
    this.list = this.list.next;
    this.head = updatedHead;
    return remove;
  };

  list.contains = function(target) {
    var hasTarget = false;
    var current = this.head;
    if (this.tail.value === target) {
      hasTarget = true;
    } else {
      while (current.next !== null) {
        if (current.value === target) {
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
 addToTail & removeHead - O(1)
 contains O(n)
 */
