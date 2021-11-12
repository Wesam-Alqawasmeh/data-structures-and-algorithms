'use strict';

const Node = require('../lib/Node');

class Queue{
    constructor(){
        this.front = null;
        this.reare = null;
        this.length = 0;
    };

    enqueue(value){

        const newNode = new Node(value);
        
        if(!this.front){
            this.front = newNode;
            this.reare = newNode;
            this.length += 1;
        }else{
            this.reare.next = newNode;
            this.reare = this.reare.next;
            this.length += 1;
        };
    };

    dequeue(){
        try {
            if(!this.front){throw new Error("Queue is empty")};
            let temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length -= 1;
            return temp.value;
        } catch (error) {
            console.log(error);
        };
    };

    peek(){
        try {
            if(!this.front){throw new Error("Queue is empty")};
            return this.front.value;
        } catch (error) {
            console.log(error);
        };
    };

    isEmpty(){
        return this.lenght === 0;
    };
};

module.exports = Queue;
