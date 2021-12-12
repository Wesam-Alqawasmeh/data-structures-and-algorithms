"use strict";

const HashTable = require("./hashtable");

function repeatedWord(string) {
  const newHashTable = new HashTable();

  let repeatedWord;

  let statement = string.split(" ");

  console.log(statement);

  for (let i = 0; i < statement.length; i++) {
    if (newHashTable.contains(statement[i])) {
      repeatedWord = statement[i];
      break;
    }

    newHashTable.add(statement[i].toLowerCase(), statement[i].toLowerCase());
  }
  //   string.split(" ").map(item => {
  //       if(newHashTable.contains(item)){
  //           repeatedWord = item;
  //           break;
  //       }

  //       newHashTable.add(item, item);
  //   });

  return repeatedWord;
}

let string =
  "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

console.log(repeatedWord(string));
