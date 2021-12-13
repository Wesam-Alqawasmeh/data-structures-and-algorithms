"use strict";

const HashTable = require("../hash-table/hashtable");
const BinaryTree = require("../trees/BinaryTree");
const Node = require("../trees/Node");

function tree_intersection(firstTree, secondTree) {
  let sharedValues = [];

  let newHashTable = new HashTable(1024);

  firstTree.preOrder().forEach((item) => {
    newHashTable.add(item, item);
  });

  secondTree.preOrder().forEach((item) => {
    if (newHashTable.contains(item)) {
      sharedValues.push(item);
    } else {
      newHashTable.add(item, item);
    }
  });

  return sharedValues;
}

let firstTree = new BinaryTree();

firstTree.root = new Node(
  "hello",
  new Node("helloworld"),
  new Node("hello people")
);

let secondTree = new BinaryTree();

secondTree.root = new Node(
  "hello",
  new Node("helloworld"),
  new Node("hello people")
);

console.log(tree_intersection(firstTree, secondTree));
