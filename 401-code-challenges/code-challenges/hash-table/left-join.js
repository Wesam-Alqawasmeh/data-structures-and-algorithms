"use strict";

const HashTable = require("./hashtable");

function leftJoin(firstTable, secondTable) {
  let leftJoinedArray = [];

  //   console.log(firstTable, secondTable);

  firstTable.map.forEach((item) => {
    if (item) {
      //   console.log(Object.keys(item.head.value)[0]);
      if (secondTable.contains(Object.keys(item.head.value)[0])) {
        leftJoinedArray.push([
          `${Object.keys(item.head.value)[0]}`,
          `${item.head.value[Object.keys(item.head.value)[0]]}`,
          `${
            secondTable.get(Object.keys(item.head.value)[0])[
              Object.keys(item.head.value)
            ]
          }`,
        ]);
      } else {
        leftJoinedArray.push([
          `${Object.keys(item.head.value)[0]}`,
          `${item.head.value[Object.keys(item.head.value)[0]]}`,
          null,
        ]);
      }
    }
  });

  return leftJoinedArray;
}

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

console.log(leftJoin(firstTable, secondTable));

module.exports = leftJoin;
