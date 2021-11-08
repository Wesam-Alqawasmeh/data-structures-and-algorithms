'use strict';

const LinkedList = require('./lib/LinkedList');


const newLinkedList = new LinkedList();


newLinkedList.append('a');
newLinkedList.append('b');
newLinkedList.append('c');
newLinkedList.append('d');
newLinkedList.append('e');
newLinkedList.append('f');
// newLinkedList.insertAfter('e', 'g');
newLinkedList.toString();



console.log(newLinkedList.kthFromEnd(1));