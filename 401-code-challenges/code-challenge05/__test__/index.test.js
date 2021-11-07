"use srtict";

const LinkedList = require("../lib/LinkedList");

describe("Linked list", () => {
  it("creation of linkedList works", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();

    list.insert("One");
    // check if the first node value (head) is correct
    expect(list.head.value).toEqual("One");

  });

  it("Can properly insert into the linked list", () => {
    let list = new LinkedList();
    list.insert("a");
    list.insert("b");
    list.insert("c");
    list.toString();
    
    expect(list.returnedLinkedlList).toBe("{c} -> {b} -> {a} -> Null");
  });

  it("The head property will properly point to the first node in the linked list", () => {
    let list = new LinkedList();
    list.insert("One");
    list.insert("Two");
    
    expect(list.head.value).toEqual("Two");
  });

  it(" Will return true when finding a value within the linked list that exists", () => {
    let list = new LinkedList();

    list.insert("a");
    list.insert("b");
    let isExist = list.includes("b");
    expect(isExist).toBe(true);
  });

  it(" Will return false when searching for a value in the linked list that does not exist", () => {
    let list = new LinkedList();

    list.insert("a");
    list.insert("b");
    let isExist = list.includes("c");
    expect(isExist).toBe(false);
  });

  it("Can properly return a collection of all the values that exist in the linked list", () => {
    let list = new LinkedList();
    list.insert("a");
    list.insert("b");
    list.insert("c");
    list.toString();
    
    expect(list.returnedLinkedlList).toBe("{c} -> {b} -> {a} -> Null");
  });
});