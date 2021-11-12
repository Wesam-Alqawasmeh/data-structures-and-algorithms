'use strict';

const LinkedList = require('./linked_list/LinkedList');


const newLinkedList = new LinkedList();


console.log(newLinkedList.toString());

// newLinkedList.append('a');
// newLinkedList.append('b');
// newLinkedList.append('c');
// newLinkedList.append('d');
// newLinkedList.append('e');
// newLinkedList.append('f');
// // newLinkedList.insertAfter('e', 'g');
// newLinkedList.toString();

// let listA = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: null
//         }
//     }
// }

// let listb = {
//     head: {
//         value: 4,
//         next: {
//             value: 5,
//             next: {
//                 value: 6,
//                 next: null
//             }
//         }
//     }
// }
// newLinkedList.zipLists(listA, listb)
// // newLinkedList.toString();