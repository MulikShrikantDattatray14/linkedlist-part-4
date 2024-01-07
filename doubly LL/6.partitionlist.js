class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//https://www.youtube.com/watch?v=b4FeEwAGDtU
function partitionLinkedList(head, B) {
    let x = B;
    const small = new ListNode(0);
    const higher = new ListNode(0);

    let smallHead = small;
    let higherHead = higher;

    while (head !== null) {
        if (head.val < x) {
            // Small list
            smallHead.next = head;
            smallHead = smallHead.next;
        } else {
            // Higher list
            higherHead.next = head;
            higherHead = higherHead.next;
        }
        head = head.next;
    }

    // Combine the small and higher lists
    higherHead.next = null;
    smallHead.next = higher.next;

    return small.next;// why .next , bcz head is zero(0)
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Example usage:
let A1 = arrayToLinkedList([1, 4, 3, 2, 5, 2]);
let B1 = 3;
console.log(linkedListToArray(partitionLinkedList(A1, B1))); // Output: [1, 2, 2, 4, 3, 5]

let A2 = arrayToLinkedList([1, 2, 3, 1, 3]);
let B2 = 2;
console.log(linkedListToArray(partitionLinkedList(A2, B2))); // Output: [1, 1, 2, 3, 3]
