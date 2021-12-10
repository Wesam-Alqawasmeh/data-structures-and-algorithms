"use strict";

const HashTable = require("../hash-table/hashtable");

describe("HashTable Testing", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let newHashTable = new HashTable(100);

    newHashTable.add("Wesam", "Full stack JS developer");

    expect(newHashTable.get("Wesam")["Wesam"]).toEqual(
      "Full stack JS developer"
    );
  });

  it("Retrieving based on a key returns the value stored", () => {
    let newHashTable = new HashTable(100);

    newHashTable.add("Wesam", "Full stack JS developer");

    expect(newHashTable.get("Wesam")["Wesam"]).toEqual(
      "Full stack JS developer"
    );
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    let newHashTable = new HashTable(100);

    expect(newHashTable.contains("Wesam")).toBe(false);
  });

  it("Successfully handle a collision within the hashtable", () => {
    let newHashTable = new HashTable(99);
    newHashTable.add("Pioneer Square", "test");
    newHashTable.add("Alki Beach", "hello");

    expect(newHashTable.get("Pioneer Square")["Pioneer Square"]).toEqual(
      "test"
    );
    expect(newHashTable.get("Alki Beach")["Alki Beach"]).toEqual("hello");
  });
});
