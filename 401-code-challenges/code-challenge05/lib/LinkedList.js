"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.valueExists = false;
    this.returnedLinkedlList = ``;
  }

  insert(value) {
    try {
      const newNode = new Node(value);

      if (!this.head) {
        this.head = newNode;
        // this.returnedLinkedlList = `{${this.head.value}} -> Null`;
        // console.log(this.returnedLinkedlList);
        return this;
      }

      let oldHead = this.head;

      this.head = newNode;

      this.head.next = oldHead;

      return this;
      // let currentNode = this.head;

      // this.returnedLinkedlList = `{${this.head.value}}`;

      // while (currentNode.next) {
      //   currentNode = currentNode.next;
      //   this.returnedLinkedlList = this.returnedLinkedlList + ` -> {${currentNode.value}}`;
      // }

      // currentNode.next = newNode;
      // this.returnedLinkedlList =  this.returnedLinkedlList + ` -> {${currentNode.next.value}} -> Null`;

      // // console.log(this.returnedLinkedlList);
      // return this;
    } catch (e) {
      console.error(`error in inserting a new value to the linked list`);
    }
  }

  includes(value) {
    try {
      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.value === value) {
          this.valueExists = true;
          break;
        }
        currentNode = currentNode.next;
      }

      // to check the last node
      if (currentNode.value === value) {
        this.valueExists = true;
      }

      return this.valueExists;
    } catch (e) {
      console.error("error in searching at the linked list");
    }
  }

  toString() {
    let currentNode = this.head;

    this.returnedLinkedlList = `{${this.head.value}}`;

    while (currentNode.next) {
      currentNode = currentNode.next;
      this.returnedLinkedlList =
        this.returnedLinkedlList + ` -> {${currentNode.value}}`;
    }

    this.returnedLinkedlList =
      this.returnedLinkedlList + ` -> Null`;

    // console.log(this.returnedLinkedlList);

    return this.returnedLinkedlList;
  }
}

module.exports = LinkedList;
