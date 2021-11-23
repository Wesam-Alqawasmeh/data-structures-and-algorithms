"use strict";

const Queue = require("../Stack&Queue/Queue");

function fizzBuzz(root) {
  if (!root) {
    return "the tree is empty";
  }

  let breadthQueue = new Queue();

  breadthQueue.enqueue(root);

  let newTreeValues = [];

  while (breadthQueue.peek()) {
    let front = breadthQueue.dequeue();

    if (front.value % 3 !== 0 && front.value % 5 !== 0) {
      newTreeValues.push(`${front.value}`);
    } else if (front.value % 3 === 0 && front.value % 5 === 0) {
      newTreeValues.push("FizzBuzz");
    } else if (front.value % 3 === 0) {
      newTreeValues.push(`Fizz`);
    } else if (front.value % 5 === 0) {
      newTreeValues.push(`Buzz`);
    }

    if (front.children) {
      for (let child in front.children) {
        breadthQueue.enqueue(front.children[child]);
      }
    }
  }

  return newTreeValues;
}

module.exports = fizzBuzz;
