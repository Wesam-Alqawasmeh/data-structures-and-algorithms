"use strict";

function BinarySearch(arr, value) {
  let a = 0;
  let b = arr.length - 1;
  let c = Math.floor((a + b) / 2);

  while (a <= b) {
    c = Math.floor((a + b) / 2);

    if (arr[c] < value) {
      a = c + 1;
    } else if (arr[c] > value) {
      b = c - 1;
    } else {
      if (arr[c] === value) {
        console.log(c);
        break;
      }
    }
  }

  if (arr[c] !== value) {
    console.log(-1);
  }
}

BinarySearch([4, 8, 15, 16, 23, 42], 42);
BinarySearch([11, 22, 33, 44, 55, 66, 77], 90);
