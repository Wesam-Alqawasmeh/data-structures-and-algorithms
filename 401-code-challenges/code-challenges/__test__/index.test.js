"use srtict";

const LinkedList = require("../lib/LinkedList");

describe("Linked list", () => {

  //////////////////////////////////////////// Challenge 05 testing //////////////////////////////////////

  it("creation of linkedList works", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();

    list.insert("One");
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

  //////////////////////////////////////////// Challenge 06 testing //////////////////////////////////////

  test('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');

    expect(list.tail.value).toEqual('2')
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.append('3');
    list.toString();

    expect(list.returnedLinkedlList).toEqual('{1} -> {2} -> {3} -> Null')
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.insertBefore('2', '3');
    list.toString();

    expect(list.returnedLinkedlList).toEqual('{1} -> {3} -> {2} -> Null')
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.insertBefore('1', '3');
    list.toString();

    expect(list.returnedLinkedlList).toEqual('{3} -> {1} -> {2} -> Null')
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.insertAfter('1', '3');
    list.toString();

    expect(list.returnedLinkedlList).toEqual('{1} -> {3} -> {2} -> Null')
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.insertAfter('2', '3');
    list.toString();

    expect(list.returnedLinkedlList).toEqual('{1} -> {2} -> {3} -> Null')
  });

  //////////////////////////////////////////// Challenge 07 testing //////////////////////////////////////

  it('Where k is greater than the length of the linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.append('3');
    list.append('4');

    // the lenght of linked list is 3 (4 ithems)
    let kthValue =  list.kthFromEnd(5);
    expect(kthValue).toBeNull();
  });

  it('Where k and the length of the list are the same', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.append('3');
    list.append('4');

    // the lenght of linked list is 3 (4 ithems)
    let kthValue =  list.kthFromEnd(3);
    expect(kthValue).toBe('1');
  });

  it('Where k is not a positive integer', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.append('3');
    list.append('4');

    let kthValue =  list.kthFromEnd(-1);
    expect(kthValue).toBeNull();
  });

  it('Where the linked list is of a size 1', () => {
    let list = new LinkedList();

    list.append('1');

    let kthValue =  list.kthFromEnd(0);
    expect(kthValue).toBe('1');

    kthValue =  list.kthFromEnd(1);
    expect(kthValue).toBeNull();
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();

    list.append('1');
    list.append('2');
    list.append('3');
    list.append('4');
    list.append('5');

    let kthValue =  list.kthFromEnd(2);
    expect(kthValue).toBe('3');
  });

});
