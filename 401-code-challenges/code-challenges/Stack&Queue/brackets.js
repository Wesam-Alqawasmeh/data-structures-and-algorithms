"use strict";

const Stack = require("./Stack");

function validateBrackets(string) {
  // create a object for openner brackets
  const openersToClosers = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // create a object for closer brackets
  const closersToOpeners = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let newStack = new Stack();

  let matchingBrackets = true;

  // looping through splitted string
  string.split("").forEach((element) => {
    if (openersToClosers[element]) {
      newStack.push(element);
    } else if (closersToOpeners[element]) {
      let openerBracket = newStack.pop();
      if (!openerBracket || openersToClosers[openerBracket] !== element) {
        matchingBrackets = false;
      }
    }
  });

  // checking the stack it there is more nodes in it
  while (newStack.top) {
    newStack.pop();
    matchingBrackets = false;
  }

  // return true if it matching or false when not
  return matchingBrackets;
}

module.exports = validateBrackets;
