"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.leftChild = left;
    this.rightChild = right;
  }
}

module.exports = Node;
