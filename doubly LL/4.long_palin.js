// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}
//https://www.youtube.com/watch?v=nLAnmS4n48I
function lengthOfLongestPalindrome(head) {
  if (head == null) {
    return 0;
  }

  if (head.next == null) {
    return 1;
  }

  let prev = null;
  let result = 1;

  while (head != null) {
    const frontnode = head.next; //stores the next node of the current head in a variable called next.
    //frontnode becomes start of 2nd half
    head.next = prev;
    //head.next = prev;: This line reverses the next pointer of the current head to point to the previous node (prev). This is a standard technique for reversing a linked list.
    // head is start of reversed half
// prev <-- head-->frontnode-->
    result = Math.max(result, 2 * getCommonElementCount(prev, frontnode) + 1); // even length
    result = Math.max(result, 2 * getCommonElementCount(head, frontnode)); // odd length
    // move iteration rightwards
    prev = head;
    head = frontnode;
    //prev = head;: This line updates the prev variable to the current head before moving to the next iteration.
    //head = frontnode;: This line updates the head to the next node, continuing the iteration.
  }

  return result;
}

function getCommonElementCount(a, b) {
  let count = 0;

  while (a != null && b != null) {
    if (a.data === b.data) {
      count++;
    } else {
      break;
    }

    a = a.next;
    b = b.next;
  }

  return count;
}

// Example usage:

// Create a linked list for testing
let head = new Node(2);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next = new Node(1);
head.next.next.next.next.next.next.next = new Node(3);
head.next.next.next.next.next.next.next.next = new Node(2);
head.next.next.next.next.next.next.next.next.next = new Node(2);

// Call the solve function
console.log(lengthOfLongestPalindrome(head)); // Output: 5
