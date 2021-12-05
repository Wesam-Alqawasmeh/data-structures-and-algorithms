"use strict";

const insertionSort = require("../insertion-sort/index");

describe("Insertion Sort Testing", () => {
  it("If it sorting an array", () => {
    let arr = [8, 4, 23, 42, 16, 15];

    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
