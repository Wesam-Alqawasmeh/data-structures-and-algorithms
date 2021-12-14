"use strict";

const leftJoin = require("../hash-table/left-join");
const HashTable = require("../hash-table/hashtable");

describe("LEFT JOIN TESTING", () => {
  it("correct implementing", () => {
    let firstTable = new HashTable(1024);

    firstTable.add("fond", "enamored");
    firstTable.add("wrath", "anger");
    firstTable.add("diligent", "employed");
    firstTable.add("outfit", "grab");
    firstTable.add("guide", "usher");

    let secondTable = new HashTable(1024);

    secondTable.add("fond", "averse");
    secondTable.add("wrath", "delight");
    secondTable.add("diligent", "idle");
    secondTable.add("flow", "jam");
    secondTable.add("guide", "usher");

    expect(leftJoin(firstTable, secondTable)).toEqual([
      ["diligent", "employed", "idle"],
      ["outfit", "grab", null],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "usher"],
      ["wrath", "anger", "delight"],
    ]);
  });
});
