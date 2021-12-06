"use strict";

let sortedArr;

function mergeSort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.ceil(n / 2);

    let left = [];
    for (let i = 0; i < mid; i++) {
      left.push(arr[i]);
    }

    let right = [];
    for (let i = mid; i < n; i++) {
      right.push(arr[i]);
    }

    // console.log("left: ", left);
    // console.log("right: ", right);
    // console.log("==========================");

    mergeSort(left);
    mergeSort(right);

    merge(left, right, arr);
  }
  //   console.log(arr);
  //   console.log("==========================");

  sortedArr = arr;

  return sortedArr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    k++;
  }

  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

// mergeSort([8, 4, 23, 42, 16, 15]);

// console.log(sortedArr);

module.exports = mergeSort;
