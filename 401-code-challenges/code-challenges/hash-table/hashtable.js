"use strict";

const LinkedList = require("../linked_list/LinkedList");

class HashTable {
  constructor(size) {
    this.map = new Array(size);
    this.size = size;
  }

  getHash(key) {
    const asciiSum = key.split("").reduce((previous, current) => {
      return (previous = previous + current.charCodeAt(0));
    }, 0);

    const withPrime = asciiSum * 599;

    const index = withPrime % this.size;

    return index;
  }

  add(key, value) {
    const index = this.getHash(key);

    const entry = { [key]: value };

    if (!this.map[index]) {
      this.map[index] = new LinkedList();
    }

    this.map[index].append(entry);
  }

  get(key) {
    const index = this.getHash(key);
    return this.map[index].contains(key);
  }

  contains(key) {
    const index = this.getHash(key);

    if (this.map[index]) {
      if (this.map[index].contains(key)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

module.exports = HashTable;
