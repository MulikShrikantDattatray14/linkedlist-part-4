// Definition for singly-linked list.
function Node(data) {
  this.data = data;
  this.next = null;
}

function findMiddleNode(head) {
  let tortoise = head;
  let hare = head;
  while (hare.next != null && hare.next.next != null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }
  return tortoise;
}

function reverseList(A) {
  let h2 = null;
  let h1 = A;
  let t;
  while (h1 != null) {
    t = h1;
    h1 = h1.next;
    t.next = h2;
    h2 = t;
  }
  return h2;
}

function equal(head1, head2) {
  while (head1 != null && head2 != null) {
    if (head1.data !== head2.data) return false;
    head1 = head1.next;
    head2 = head2.next;
  }
  return true;
}

// Function to check if a linked list is a palindrome
function isPalindrome(A) {
  let mid = findMiddleNode(A);
  let head1 = A;
  let head2 = reverseList(mid.next); // Pass the next of the middle node for odd-length lists
  return equal(head1, head2);
}

// Example usage:
// Create a palindrome linked list: 1 -> 2 -> 2 -> 1
let palindromeList = new Node(1);
palindromeList.next = new Node(2);
palindromeList.next.next = new Node(2);
palindromeList.next.next.next = new Node(1);

// Check if it's a palindrome
console.log(isPalindrome(palindromeList)); // Output: true

// // Create a non-palindrome linked list: 1 -> 3 -> 2
// let nonPalindromeList = new Node(1);
// nonPalindromeList.next = new Node(3);
// nonPalindromeList.next.next = new Node(2);

// // Check if it's a palindrome
// console.log(isPalindrome(nonPalindromeList)); // Output: false
