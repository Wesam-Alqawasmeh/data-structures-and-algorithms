"use strict";

const BinaryTree = require("../trees/BinaryTree");
const Node = require("../trees/Node");

describe("Binary Tree Testing", () => {
  test("Can successfully instantiate an empty tree", () => {
    let newBinaryTree = new BinaryTree();

    expect(newBinaryTree.root).toBeNull();
  });

  test("Can successfully instantiate a tree with a single root node", () => {
    let newNode = new Node(1);
    let newBinaryTree = new BinaryTree(newNode);

    expect(newBinaryTree.root).toBeDefined();
  });

  test("Can successfully add a left child and right child to a single root node", () => {
    let newNode = new Node(1);
    let newBinaryTree = new BinaryTree(newNode);

    newBinaryTree.root.leftChild = new Node(2);
    newBinaryTree.root.rightChild = new Node(3);

    expect(newBinaryTree.root.value).toBe(1);
    expect(newBinaryTree.root.leftChild.value).toBe(2);
    expect(newBinaryTree.root.rightChild.value).toBe(3);
  });

  test("Can successfully return a collection from a pre order traversal", () => {
    let newBinaryTree = new BinaryTree();

    newBinaryTree.root = new Node(
      10,
      new Node(5, new Node(3), new Node(6)),
      new Node(15, new Node(14), new Node(18))
    );

    expect(newBinaryTree.preOrder()).toEqual([10, 5, 3, 6, 15, 14, 18]);
  });

  test("Can successfully return a collection from an in order traversal", () => {
    let newBinaryTree = new BinaryTree();

    newBinaryTree.root = new Node(
      10,
      new Node(5, new Node(3), new Node(6)),
      new Node(15, new Node(14), new Node(18))
    );

    expect(newBinaryTree.inOrder()).toEqual([3, 5, 6, 10, 14, 15, 18]);
  });

  test("Can successfully return a collection from a post order traversal", () => {
    let newBinaryTree = new BinaryTree();

    newBinaryTree.root = new Node(
      10,
      new Node(5, new Node(3), new Node(6)),
      new Node(15, new Node(14), new Node(18))
    );

    expect(newBinaryTree.postOrder()).toEqual([3, 6, 5, 14, 18, 15, 10]);
  });
});
