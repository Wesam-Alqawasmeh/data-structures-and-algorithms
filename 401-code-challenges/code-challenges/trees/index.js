"use strict";

const BinarySearchTree = require("./BinarySearchTree");

const BinaryTree = require("./BinaryTree");

// const BinaryTree = require("./BinaryTree");

const breadthFirst = require("./breadthFirst");

const fizzBuzz = require("./fizzbuzz");

const Node = require("./Node");

const newBinarySearchTree = new BinarySearchTree();

const newBinaryTree = new BinaryTree();

let k_aryTree = {
  value: 1,
  children: {
    firstChild: {
      value: 3,
      children: {
        firstChild: {
          value: 30,
        },
        secondChild: {
          value: 45,
        },
        thirdChild: {
          value: 10,
        },
      },
    },
    secondChild: {
      value: 5,
    },
    thirdChild: {
      value: 15,
    },
  },
};

console.log(fizzBuzz(k_aryTree));

// newBinaryTree.root = new Node(
//   2,
//   new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))),
//   new Node(5, null, new Node(9, new Node(4)))
// );

// newBinarySearchTree.root = new Node(
//   10,
//   new Node(5, new Node(3), new Node(6)),
//   new Node(15, new Node(14), new Node(18))
// );

// console.log(breadthFirst(newBinaryTree.root));

// newBinarySearchTree.add(19);
// newBinarySearchTree.add(13);

// console.log(newBinarySearchTree.preOrder());

// console.log(newBinarySearchTree.contains(7)); // false
// console.log(newBinarySearchTree.contains(18)); // true

// console.log(newBinaryTree.maximumValue());
