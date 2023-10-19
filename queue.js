class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    console.log(this.items.join(" "));
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue elements:");
queue.printQueue();

console.log("Front element:", queue.front());

console.log("Dequeue:", queue.dequeue());
console.log("Queue size:", queue.size());

console.log("Queue elements after dequeue:");
queue.printQueue();
