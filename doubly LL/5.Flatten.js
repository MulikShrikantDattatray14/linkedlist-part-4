// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:
// (i) a next pointer to the next node,
// (ii) a bottom pointer to a linked list where this node is head.
// Each of the sub-linked-list is in sorted order.
// Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.
// Note: The flattened list will be printed using the bottom pointer instead of next pointer.

// Note: All linked lists are sorted and the resultant linked list should also be sorted

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.down = null;
  }
}

function mergeLists(h1, h2) {
  if (h1 == null) return h2;
  if (h2 == null) return h1;
  let h3 = null; // head for the new merged LL
  let Temp = null;
  // for identifying the start node of the new LL
  if (h1.data < h2.data) {
    h3 = h1;
    Temp = h1;
    h1 = h1.down; // this maintains head of 1st LL
  } else {
    h3 = h2;
    Temp = h2;
    h2 = h2.down; //// this maintains head of 2st LL
  }
  // for remaining nodes
  while (h1 !== null && h2 !== null) {
    if (h1.data < h2.data) {
      Temp.down = h1;
      h1 = h1.down;
      Temp = Temp.down;
    } else {
      Temp.down = h2;
      h2 = h2.down;
      Temp = Temp.down;
    }
  }

  // If one of the lists is not fully processed
  if (h1 !== null) {
    Temp.down = h1;
  } else {
    Temp.down = h2;
  }
  return h3;
}

function flattenLinkedList(head) {
  if (head === null || head.right === null) {
    return head;
  }

  let center1 = findMiddle(head);
  let center2 = center1.right;
  center1.right = null;
  let h1 = flattenLinkedList(head);
  let h2 = flattenLinkedList(center2);
  return mergeLists(h1, h2);
}

function findMiddle(head) {
  if (head === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  while (fast.right !== null && fast.right.right !== null) {
    slow = slow.right;
    fast = fast.right.right;
  }

  return slow;
}
// Example usage:
const head = new Node(5);
head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.next = new Node(10);
head.next.bottom = new Node(20);
head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);

const flattenedList = flattenLinkedList(head);

// Printing the flattened list using the bottom pointer
let current = flattenedList;
while (current !== null) {
  console.log(current.data);
  current = current.down;
}
