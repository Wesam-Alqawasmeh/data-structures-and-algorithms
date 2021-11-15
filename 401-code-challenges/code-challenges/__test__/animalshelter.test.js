"use strict";

const AnimalShelter = require("../Stack&Queue/AnimalShelter");

describe("AnimalShelter TESTING", () => {
  test("can enqueue a dog", () => {
    let newAnimalShelter = new AnimalShelter();

    let dog = {
      type: "dog",
      name: "kiwi",
    };

    newAnimalShelter.enqueue(dog);
    expect(newAnimalShelter.dogs.length).toBe(1);
  });

  test("can enqueue multible dogs", () => {
    let newAnimalShelter = new AnimalShelter();

    let dog1 = {
      type: "dog",
      name: "kiwi",
    };
    let dog2 = {
      type: "dog",
      name: "kiwi",
    };

    newAnimalShelter.enqueue(dog1);
    newAnimalShelter.enqueue(dog2);
    expect(newAnimalShelter.dogs.length).toBe(2);
  });
  ///////////////////////////////////////////////////////////////////////////////////
  test("can enqueue a cat", () => {
    let newAnimalShelter = new AnimalShelter();

    let cat = {
      type: "cat",
      name: "mishmish",
    };

    newAnimalShelter.enqueue(cat);
    expect(newAnimalShelter.cats.length).toBe(1);
  });

  test("can enqueue multible cats", () => {
    let newAnimalShelter = new AnimalShelter();

    let cat1 = {
      type: "cat",
      name: "kiwi",
    };
    let cat2 = {
      type: "cat",
      name: "mishmish",
    };

    newAnimalShelter.enqueue(cat1);
    newAnimalShelter.enqueue(cat2);
    expect(newAnimalShelter.cats.length).toBe(2);
  });
  /////////////////////////////////////////////////////////

  test("can dequeue a cat or a dog, and returns null on any other type of animals", () => {
    let newAnimalShelter = new AnimalShelter();

    let cat = {
      type: "cat",
      name: "kiwi",
    };
    let dog = {
      type: "dog",
      name: "mishmish",
    };

    newAnimalShelter.enqueue(cat);
    newAnimalShelter.enqueue(dog);
    expect(newAnimalShelter.dequeue("fish")).toBeNull();
    expect(newAnimalShelter.dequeue("cat").name).toBe("kiwi");
    expect(newAnimalShelter.dequeue("dog").name).toBe("mishmish");
  });
});
