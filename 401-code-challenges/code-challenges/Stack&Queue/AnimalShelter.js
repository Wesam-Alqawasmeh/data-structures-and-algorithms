"use strict";

const Queue = require("./Queue");

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  /***************** @Params object with (type, name) properties **********************************/
  enqueue(animal) {
    if (animal.type !== "dog" && animal.type !== "cat") {
      return null;
    }
    if (animal.type === "dog") {
      this.dogs.enqueue(animal);
      return this;
    }

    if (animal.type === "cat") {
      this.cats.enqueue(animal);
      return this;
    }
  }

  /***************** @Params type of animal as a string **********************************/

  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat") {
      return null;
    }

    if (pref === "cat") {
      return this.cats.dequeue();
    }

    if (pref === "dog") {
      return this.dogs.dequeue();
    }
  }
}

module.exports = AnimalShelter;
