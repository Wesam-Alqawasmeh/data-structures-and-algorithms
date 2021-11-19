"use strict";

const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Depth First Traversal
  // in depth first traversal, we have 3 methods of traversing the Graph
  // Pre-Order: Read -> Left -> Right
  // In-Order: left -> Read -> Right
  // Post-Order: Left -> Right -> Read

  /**
   * Pre-Oder
   *  Read -> Left -> Right
   */

  preOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // read
      preOrderArr.push(node.value);
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return preOrderArr;
  }
  /**
   *
   * In Order: : left -> Read -> Right
   */

  inOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // read
      preOrderArr.push(node.value);
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return preOrderArr;
  }

  /**
   *
   * Post-Order: Left -> Right -> Read
   */

  postOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
      // read
      preOrderArr.push(node.value);
    };

    _walk(this.root);

    return preOrderArr;
  }
}

module.exports = BinaryTree;
