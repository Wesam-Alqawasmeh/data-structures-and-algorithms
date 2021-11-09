"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.valueueExists = false;
    this.returnedLinkedlList = ``;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////

  zipLists(a, b) {
    let aNode = a.head;
    let bNode = b.head;

    let currentNode = new Node(aNode.value);
    this.head = currentNode;


    while((currentNode && bNode) || (currentNode && aNode)){
      if(bNode){
        currentNode.next = new Node(bNode.value);
        currentNode = currentNode.next;
        bNode = bNode.next;
      }
     
      if(aNode){
        aNode = aNode.next;
        if(aNode){
          currentNode.next = new Node(aNode.value);
          currentNode = currentNode.next;
        }
      }
    };
    return this.head;

    // let aNodeArr = [];
    // let bNodeArr = [];
    // while(aNode){
    //   aNodeArr.push(aNode.value);
    //   aNode = aNode.next;
    // };

    // while(bNode){
    //   bNodeArr.push(bNode.value);
    //   bNode = bNode.next;
    // };

    // let counter = 0;
    // while((currentNode && counter < bNodeArr.length) || (currentNode && counter < aNodeArr.length)){
    //   if (counter < bNodeArr.length){
    //     currentNode.next = new Node(bNodeArr[counter]);
    //     currentNode = currentNode.next;
    //   }
      
    //   if(counter + 1 < aNodeArr.length){
    //     currentNode.next = new Node(aNodeArr[counter + 1]);
    //     currentNode = currentNode.next;
    //   }
    //   counter ++;
    // }
    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////

  kthFromEnd(k) {
    try {
      if (!this.head) {
        return null;
      }

      let currentNode = this.head;
      let nodevalueuesArr = [];
      while (currentNode.next) {
        nodevalueuesArr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      nodevalueuesArr.push(currentNode.value);

      if (k >= nodevalueuesArr.length || k < 0) {
        return null;
      }

      for (let i = 0; i < nodevalueuesArr.length; i++) {
        if (nodevalueuesArr.length - 1 - k === i) {
          // console.log( nodevalueuesArr[i]);
          return nodevalueuesArr[i];
        }
      }
    } catch (e) {
      console.error(`error in returning kth from the end for the linked list`);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

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
          this.valueueExists = true;
          break;
        }
        currentNode = currentNode.next;
      }

      // to check the last node
      if (currentNode.value === value) {
        this.valueueExists = true;
      }

      return this.valueueExists;
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
