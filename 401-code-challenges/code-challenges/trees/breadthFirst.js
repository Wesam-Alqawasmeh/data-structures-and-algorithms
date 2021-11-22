"use strict";

const Queue = require("../Stack&Queue/Queue");

/**
 *
 * @param {tree root obj} root
 * @returns Array
 */

function breadthFirst(root) {
  let breadthQueue = new Queue();

  if (!root) {
    return "The tree is empty";
  }

  breadthQueue.enqueue(root);

  let breadthFirstArr = [];

  while (breadthQueue.peek()) {
    let front = breadthQueue.dequeue();

    breadthFirstArr.push(front.value);

    if (front.leftChild) {
      breadthQueue.enqueue(front.leftChild);
    }

    if (front.rightChild) {
      breadthQueue.enqueue(front.rightChild);
    }
  }

  return breadthFirstArr;
}

module.exports = breadthFirst;
