"use strict";

function insertionSort(arr) {
  let numArr = arr;
  for (let i = 1; i < numArr.length; i++) {
    let temp = numArr[i];
    let j = i - 1;
    while (j >= 0 && temp < numArr[j]) {
      numArr[j + 1] = numArr[j];

      j = j - 1;
    }

    numArr[j + 1] = temp;
  }
  return numArr;
}

let newArr = [8, 4, 23, 42, 16, 15];

// console.log(insertionSort(newArr));

module.exports = insertionSort;
