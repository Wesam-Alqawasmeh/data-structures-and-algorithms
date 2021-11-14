"use strict";

const PseudoQueue = require("../Stack&Queue/PseudoQueue");

describe("PseudoQueue TESTING", () => {
  describe("PseudoQueue enqueue", () => {
    it("check if it can add to empty queue", () => {
      let newPseudoQueue = new PseudoQueue();

      newPseudoQueue.enqueue(1);
      // check it it can add to empty queue
      expect(newPseudoQueue.Stack1.top.value).toBe(1);
    });

    it("check it it can add multiple nodes to the queue", () => {
      let newPseudoQueue = new PseudoQueue();

      newPseudoQueue.enqueue(1);
      newPseudoQueue.enqueue(2);
      expect(newPseudoQueue.Stack1.top.value).toBe(2);
      expect(newPseudoQueue.Stack1.top.next.value).toBe(1);
    });
  });

  describe("PseudoQueue dequeue", () => {
    it("check if it can remove from queue", () => {
      let newPseudoQueue = new PseudoQueue();

      newPseudoQueue.enqueue(1);
      newPseudoQueue.enqueue(2);
      newPseudoQueue.enqueue(3);
      newPseudoQueue.enqueue(4);
      expect(newPseudoQueue.dequeue()).toBe(1);
      expect(newPseudoQueue.dequeue()).toBe(2);
      expect(newPseudoQueue.dequeue()).toBe(3);
      expect(newPseudoQueue.dequeue()).toBe(4);
    });
  });
});
