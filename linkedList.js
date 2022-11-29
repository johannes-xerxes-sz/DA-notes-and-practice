var LinkedList = function() {
  this.head = null;
  this.tail = null;
 };



  LinkedList.prototype.addToTail = function(value) {
    var node = this.makeNode(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node
    } else {
      this.tail = node;
      this.head = node;
    }
  };

  LinkedList.prototype.removeHead = function() {
    if (this.head) {
      var head = this.head;
      this.head = this.head.next;
      return head.value
    } else {
      return null;
    }
  };

  LinkedList.prototype.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  LinkedList.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };
