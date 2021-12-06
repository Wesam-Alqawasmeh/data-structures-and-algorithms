"use strict";

const mergeSort = require("../merge-sort/index");

describe("MERGE SORT TESTING", () => {
  test("IF IT SORT AN ARRAY USING MERGE SORT ALGORITHM", () => {
    let arr = [8, 4, 23, 42, 16, 15];

    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
