# Trees

<!-- Short summary or background information -->

**Common trees terminologies**

| term   | meaning                                                                                                           |
| ------ | ----------------------------------------------------------------------------------------------------------------- |
| Node   | A Tree node is a component which may contain it’s own values, and references to other nodes                       |
| Root   | The root is the node at the beginning of the tree                                                                 |
| K      | A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2 |
| Left   | A reference to one child node, in a binary tree                                                                   |
| Right  | A reference to the other child node, in a binary tree                                                             |
| Edge   | The edge in a tree is the link between a parent and child node                                                    |
| Leaf   | A leaf is a node that does not have any children                                                                  |
| Height | The height of a tree is the number of edges from the root to the furthest leaf                                    |

---

**Traversals**

There are two categories of traversals:

1. Depth First.
2. Breadth First.

**Depth First**

- Depth first traversal is where we prioritize going through the depth (height) of the tree first.

- three methods for depth first traversal:

1. Pre-order: `root >> left >> right`
2. In-order: `left >> root >> right`
3. Post-order: `left >> right >> root`

**Breadth First**

- Breadth first traversal iterates through the tree by going through each level of the tree node-by-node.
- breadth first traversal uses a queue (instead of the call stack via recursion) to traverse the width/breadth of the tree.

---

## Challenge

<!-- Description of the challenge -->

1. I have to create a Node class that has the value, left child, and right child properties.
2. I have to create a Binary Tree class and define a 3 methods: pre order, in order, post order to traverse the tree.
3. I have to create a sub class of Binary Tree class which is Binary Search Tree class, and define two methods: add to add a node in the right order, contains to check of a value if it exists in the tree.

---

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

pre order , in order , and post order methods :

- time complexity => O(n)
- space complexity => O(1)

Add method :

- time complexity => O(n)
- space complexity => O(1)

contains method:

- time complexity => O(1)
- space complexity => O(1)

---

## JS code and test files

[code-challenges](../code-challenges/)

[Trees](../code-challenges/trees)
