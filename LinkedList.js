class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(val) {
    const newNode = new ListNode(val, this.head);
    this.head = newNode;
    this.length++;
  }

  createList(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      this.insertAtHead(arr[i]);
    }
  }

  getNodeByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }

    return curr;
  }

  print() {
    if (!this.head) console.log("Linked List is empty.");

    let curr = this.head;
    let output = "";
    while (curr) {
      output += curr.val + " -> ";
      curr = curr.next;
    }

    console.log(`${output}null`);
  }

  insertAtIndex(index, val) {
    if (index < 0) return console.error("Cannot insert at a negative index!");
    if (index > this.length) return console.error("Index out of bounds!");
    if (index === 0) return this.insertAtHead(val);

    const prev = this.getNodeByIndex(index - 1);
    prev.next = new ListNode(val, prev.next);
    this.length++;
  }

  removeAtHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index < 0) return console.error("Cannot remove at a negative index!");
    if (index > this.length) return console.error("Index out of bounds!");
    if (index === 0) return this.removeAtHead();

    const prev = this.getNodeByIndex(index - 1);
    prev.next = prev.next.next;
    this.length--;
  }
}

module.exports = LinkedList;
