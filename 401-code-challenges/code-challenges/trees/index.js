"use strict";

const BinarySearchTree = require("./BinarySearchTree");

// const BinaryTree = require("./BinaryTree");

const Node = require("./Node");

const newBinarySearchTree = new BinarySearchTree();

newBinarySearchTree.root = new Node(
  10,
  new Node(5, new Node(3), new Node(6)),
  new Node(15, new Node(14), new Node(18))
);

// newBinarySearchTree.add(19);
// newBinarySearchTree.add(13);

// console.log(newBinarySearchTree.preOrder());

console.log(newBinarySearchTree.contains(7)); // false
console.log(newBinarySearchTree.contains(18)); // true
