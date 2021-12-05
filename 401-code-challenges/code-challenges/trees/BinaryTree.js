"use strict";

const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  fileStructure(firstDir, secondDir) {
    let firstDirFiles = 0;
    let secondDirFiles = 0;

    if (!firstDir || !secondDir) return null;

    if (firstDir) {
      const _walk = (node) => {
        if (node.value === "folder") {
          // check left
          if (node.leftChild) {
            _walk(node.leftChild);
          }
          // check right
          if (node.rightChild) {
            _walk(node.rightChild);
          }
        } else {
          firstDirFiles++;
        }
      };

      _walk(firstDir);
    }

    if (secondDir) {
      const _walk = (node) => {
        if (node.value === "folder") {
          // check left
          if (node.leftChild) {
            _walk(node.leftChild);
          }
          // check right
          if (node.rightChild) {
            _walk(node.rightChild);
          }
        } else {
          secondDirFiles++;
        }
      };

      _walk(secondDir);
    }

    return firstDirFiles === secondDirFiles;
  }

  /* this function will traverse the whole tree and in each iteration will check
  if the current node value is bigger than the maximum value or not */
  maximumValue() {
    if (!this.root) {
      return null;
    }

    let maximumValue = 0;

    const _walk = (node) => {
      if (node.value > maximumValue) {
        maximumValue = node.value;
      }

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

    return maximumValue;
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
