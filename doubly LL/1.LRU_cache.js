// Cache-(कैश्‌)-a part of a computer’s memory that stores copies of data so that the data can be found very quickly
//LRU-least recently used.

class LRUCacheNode {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.head = new LRUCacheNode(0, 0); // Dummy head node
      this.tail = new LRUCacheNode(0, 0); // Dummy tail node
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
  
    _addNodeToHead(node) {
      node.prev = this.head;
      node.next = this.head.next;
      this.head.next.prev = node;
      this.head.next = node;
    }
  
    _removeNode(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  
    _moveToHead(node) {
      this._removeNode(node);
      this._addNodeToHead(node);
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this._moveToHead(node);
        return node.value;
      } else {
        return -1;
      }
    }
  
    set(key, value) {
      if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this._moveToHead(node);
      } else {
        if (this.cache.size === this.capacity) {
          // Remove the least recently used item from the tail
          const delKey = this.tail.prev.key;
          this._removeNode(this.tail.prev);
          this.cache.delete(delKey);
        }
  
        const newNode = new LRUCacheNode(key, value);
        this.cache.set(key, newNode);
        this._addNodeToHead(newNode);
      }
    }
  }
  
  // Example usage:
  const capacity = 2;
  const lruCache = new LRUCache(capacity);
  
  lruCache.set(1, 10);
  lruCache.set(5, 12);
  console.log(lruCache.get(5)); // returns 12
  console.log(lruCache.get(1)); // returns 10
  console.log(lruCache.get(10)); // returns -1
  lruCache.set(6, 14); // pushes out key = 5 as LRU is full
  console.log(lruCache.get(5)); // returns -1
  