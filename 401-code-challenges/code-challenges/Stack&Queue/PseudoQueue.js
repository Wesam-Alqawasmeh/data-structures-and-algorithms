"use strict";

const Stack = require("./Stack");

class PseudoQueue {
  constructor() {
    this.Stack1 = new Stack();
    this.Stack2 = new Stack();
  }

  enqueue(value) {
    this.Stack1.push(value);
  }

  dequeue() {
    if (!this.Stack1.top && !this.Stack2.top) {
      throw new Error("The Queue is empty nothing to remove !");
    }

    if (!this.Stack2.top) {
      while (this.Stack1.top) {
        this.Stack2.push(this.Stack1.top.value);
        this.Stack1.pop();
      }
    }

    return this.Stack2.pop();
  }
}

module.exports = PseudoQueue;
