class Node {
  // creates a single node with data and a reference to the next node
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  // return a string representation of the node
  toString() {
    return `<Node data: ${this.data}>`;
  }
}

class SinglyLinkedList {
  // initialize an empty linked list
  constructor() {
    this.head = null;
    this._count = 0; // tracks the number of nodes in the list
  }

  // check of the linked list is empty
  isEmpty() {
    return this.head === null;
  }

  // return the length of the linked list
  length() {
    return this._count;
  }
}

const list = new SinglyLinkedList();
console.log(list.isEmpty()); // true
console.log(list.length()); // 0

const node1 = new Node(10);
const node2 = new Node(20, node1);
console.log(node2.toString()); // <Node data: 20>
