"use strict";

const quickSort = require("../quick-sort/index");

describe("QUICK SORT TESTING", () => {
  test("if it sort an array success fully", () => {
    let array = [8, 4, 23, 42, 16, 15];

    expect(quickSort(array, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
