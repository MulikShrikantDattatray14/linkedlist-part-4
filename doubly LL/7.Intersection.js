//Approach :
// 1.Find the lengths of both linked lists.
// 2.Move the pointers of the longer linked list ahead by the difference in lengths.
// 3.Move both pointers simultaneously until they meet.

// Definition for singly-linked list.
//https://www.youtube.com/watch?v=8CACsqPWpHo&t=213s
function Node(data) {
  this.data = data;
  this.next = null;
}

// Function to get the length of a linked list
function getLength(head) {
  let ret = 0;
  while (head !== null) {
    ret++;
    head = head.next;
  }
  return ret;
}

// Function to find the intersection node of two linked lists
// Param A: head node of the first linked list
// Param B: head node of the second linked list
// Return: the intersection node
function solve(A, B) {
  // Check if either of the linked lists is null
  if (!A || !B) {
    return null;
  }

  // Initialize pointers for both linked lists
  let pa = A;
  let pb = B;

  // Get the lengths of both linked lists
  let lenA = getLength(A);
  let lenB = getLength(B);

  // Calculate the length difference between the two linked lists
  let lenDiff = lenA - lenB;

  // Adjust the pointer of the longer linked list to have equal lengths
  if (lenDiff > 0) {
    while (lenDiff !== 0) {
      pa = pa.next;
      lenDiff--;
    }
  } else if (lenDiff < 0) {
    while (lenDiff !== 0) {
      pb = pb.next;
      lenDiff++;
    }
  }

  // Traverse both linked lists until an intersection is found
  while (pa && pb) {
    if (pa === pb) {
      // Intersection found, return the intersection node
      console.log(pa.data)
      return pa;
    }
    pa = pa.next;
    pb = pb.next;
  }

  // No intersection found
  return null;
}

// Example:
// Creating two linked lists with an intersection at node with value 5
let intersectNode = new Node(5);

let list1 = new Node(1);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = intersectNode;

let list2 = new Node(4);
list2.next = intersectNode;

// Finding the intersection node
let result = solve(list1, list2);

console.log(result); // Output should be the intersectNode with value 5
