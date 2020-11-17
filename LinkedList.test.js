const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  test("should insert node at the beginning of the linked list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.val).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#createList", () => {
  test("should create a linked list", () => {
    const ll = new LinkedList();
    expect(ll.length).toBe(0);
    ll.createList([10, 20, 30]);
    expect(ll.length).toBe(3);
    expect(ll.head.val).toBe(10);
  });
});

describe("#getNodeByIndex", () => {
  describe("when index is less than 0", () => {
    test("should return null", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      expect(ll.getNodeByIndex(-2)).toBeNull();
    });
  });

  describe("when index is greater than length", () => {
    test("should return null", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      expect(ll.getNodeByIndex(3)).toBeNull();
    });
  });

  describe("when index is 0", () => {
    test("should return head val", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30]);
      expect(ll.getNodeByIndex(0).val).toBe(10);
    });
  });

  describe("when index is in the middle", () => {
    test("should return the specific node val", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30, 40]);
      expect(ll.getNodeByIndex(1).val).toBe(20);
    });
  });
});

describe("#print", () => {
  describe("when the linked list is empty", () => {
    test("should print list is empty", () => {
      const ll = new LinkedList();
      console.log = jest.fn();
      ll.print();
      expect(console.log).toHaveBeenCalledWith("Linked List is empty.");
    });
  });

  describe("when the linked list in not empty", () => {
    test("should print out the list node by node", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30]);

      console.log = jest.fn();
      ll.print();
      expect(console.log).toHaveBeenCalledWith("10 -> 20 -> 30 -> null");
    });
  });
});

describe("#insertAtIndex", () => {
  describe("when index is less than 0", () => {
    test("should return an error message", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      console.error = jest.fn();
      ll.insertAtIndex(-1);
      expect(console.error).toHaveBeenCalledWith(
        "Cannot insert at a negative index!"
      );
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is greater than length", () => {
    test("should return an error message", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      console.error = jest.fn();
      ll.insertAtIndex(3);
      expect(console.error).toHaveBeenCalledWith("Index out of bounds!");
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is 0", () => {
    test("should insert at the head", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30]);
      ll.insertAtIndex(0, 5);
      expect(ll.head.val).toBe(5);
      expect(ll.head.next.val).toBe(10);
      expect(ll.length).toBe(4);
    });
  });

  describe("when index is in the middle", () => {
    test("should insert at the given index", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30, 40]);
      ll.insertAtIndex(2, 25);
      const node = ll.getNodeByIndex(1);
      expect(node.next.val).toBe(25);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removeAtHead", () => {
  test("should remove the head node", () => {
    const ll = new LinkedList();
    ll.createList([10, 20, 30]);
    expect(ll.length).toBe(3);
    ll.removeAtHead();
    expect(ll.head.val).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe("#removeAtIndex", () => {
  describe("when index is less than 0", () => {
    test("should return an error message", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      console.error = jest.fn();
      ll.removeAtIndex(-1);
      expect(console.error).toHaveBeenCalledWith(
        "Cannot remove at a negative index!"
      );
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is greater than length", () => {
    test("should return an error message", () => {
      const ll = new LinkedList();
      ll.createList([10, 20]);
      console.error = jest.fn();
      ll.removeAtIndex(3);
      expect(console.error).toHaveBeenCalledWith("Index out of bounds!");
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is 0", () => {
    test("should remove the head node", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30]);
      expect(ll.length).toBe(3);
      ll.removeAtIndex(0);
      expect(ll.head.val).toBe(20);
      expect(ll.head.next.val).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is in the middle", () => {
    test("should remove at the given index", () => {
      const ll = new LinkedList();
      ll.createList([10, 20, 30, 40]);
      expect(ll.length).toBe(4);
      ll.removeAtIndex(2);
      const node = ll.getNodeByIndex(1);
      expect(node.next.val).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});
