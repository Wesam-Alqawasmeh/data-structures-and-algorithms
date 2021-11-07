"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.valueExists = false;
    this.returnedLinkedlList = ``;
  }

  append(value) {
    try {
      const newNode = new Node(value);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return this;
      }

      let currentNode = this.tail;

      currentNode.next = newNode;

      this.tail = currentNode.next;

      return this;
    } catch (e) {
      console.error(`error in appending a new value to the linked list`);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  insertBefore(value, newValue) {
    try {
      const newNode = new Node(newValue);

      if (!this.head) {
        this.head = newNode;
        return this;
      }

      let currentNode = this.head;
      let previousNode;

      if (currentNode.value === value) {
        this.head = newNode;
        this.head.next = currentNode;
      } else {
        while (currentNode.next) {
          if (currentNode.value === value) {
            break;
          }
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = newNode;
        let addedNode = previousNode.next;

        addedNode.next = currentNode;
      }

      return this;
    } catch (e) {
      console.error(
        `error in inserting ${value} before ${newValue} to the linked list`
      );
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  insertAfter(value, newValue) {
    try {
      const newNode = new Node(newValue);

      if (!this.head) {
        this.head = newNode;
        return this;
      }

      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.value === value) {
          break;
        }
        currentNode = currentNode.next;
      }
      let afterNewNode = currentNode.next;
      currentNode.next = newNode;
      let addedNode = currentNode.next;
      addedNode.next = afterNewNode;

      return this;
    } catch (e) {
      console.error(
        `error in inserting ${value} after ${newValue} to the linked list`
      );
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////
  insert(value) {
    try {
      const newNode = new Node(value);

      if (!this.head) {
        this.head = newNode;
        return this;
      }

      let oldHead = this.head;

      this.head = newNode;

      this.head.next = oldHead;

      return this;
    } catch (e) {
      console.error(`error in inserting a new value to the linked list`);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
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
  ///////////////////////////////////////////////////////////////////////////////////////////////
  toString() {
    let currentNode = this.head;

    this.returnedLinkedlList = `{${this.head.value}}`;

    while (currentNode.next) {
      currentNode = currentNode.next;
      this.returnedLinkedlList =
        this.returnedLinkedlList + ` -> {${currentNode.value}}`;
    }

    this.returnedLinkedlList = this.returnedLinkedlList + ` -> Null`;

    // console.log(this.returnedLinkedlList);

    return this.returnedLinkedlList;
  }
}

module.exports = LinkedList;
