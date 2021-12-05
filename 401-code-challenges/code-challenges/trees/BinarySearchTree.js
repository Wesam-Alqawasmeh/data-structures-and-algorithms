"use strict";

const BinaryTree = require("./BinaryTree");

const Node = require("./Node");

class BinarySearchTree extends BinaryTree {
  constructor(props) {
    super(props);
  }

  /**
   *
   * @param {the root of binary search tree} root
   * @returns sum of odd numbers
   */

  sumOfOdd(root) {
    if (!root) {
      return "Binary tree is empty";
    }

    let sum = 0;

    const _walk = (node) => {
      // check if the value is odd add it to the sum
      if (node.value % 2 != 0) {
        sum = sum + node.value;
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

    _walk(root);

    return sum;
  }

  ////////////////////////////////////////////

  add(value) {
    let newNode = new Node(value);
    // checking if the tree is empty add the value to the root
    if (!this.root) {
      this.root = newNode;
    }

    /* recursion function will check in each time if the value if more or less than the root
     then move down till it reaches leaf then add the new node either in the left child of in the right child*/
    const _walk = (node) => {
      if (value < node.value) {
        if (node.leftChild) {
          _walk(node.leftChild);
        }
        if (!node.leftChild) {
          node.leftChild = newNode;
        }
      }

      if (value > node.value) {
        if (node.rightChild) {
          _walk(node.rightChild);
        }
        if (!node.rightChild) {
          node.rightChild = newNode;
        }
      }
    };

    // calling the recursion function
    _walk(this.root);
  }

  /* this function will use binary tree class methods
   to check if the value in existing in the tree */
  contains(value) {
    let treeValues = this.preOrder();

    return treeValues.includes(value);
  }
}

module.exports = BinarySearchTree;
