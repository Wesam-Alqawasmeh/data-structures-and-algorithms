"use strict";
const Queue = require("./Queue");

function duckDuckGoose(players, k) {
  let newQueue = new Queue();
  let dequeuedValue = "";

  if (players.length !== 0) {
    for (let i = 0; i < players.length; i++) {
      newQueue.enqueue(players[i]);
    }
  } else {
    return "no players";
  }
  while (newQueue.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      dequeuedValue = newQueue.dequeue();
      newQueue.enqueue(dequeuedValue);
    }
    newQueue.dequeue();
  }
  console.log(`the winner is ${newQueue.dequeue()} `);
  //   return `last Person is : ${newQueue.dequeue()} `;
}

let players = ["a", "b", "c", "d", "e"];

let players2 = ["a", "b", "c", "d", "e", "f"];

duckDuckGoose(players2, 3);
duckDuckGoose(players, 2);
