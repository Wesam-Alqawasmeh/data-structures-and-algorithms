'use strict';

const Node = require('../lib/Node');


class Stack{
    constructor(){
        this.top = null;
    };

    push(value){

        const newNode = new Node(value);

        if(! this.top){
            this.top = newNode
        }else{
            newNode.next = this.top;
            this.top = newNode;
        };
    };

    pop(){
        try{
            if(! this.top){throw new Error('the stack is empty')};
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            return temp.value;
        }catch(e){
            console.log(e);
            return e.message;
        };
    };

    peek(){
        try {
            if(!this.top){throw new Error('the stack is empty')};
            return this.top.value;
        } catch (error) {
            console.log(error);
            return error.message;
        };
    };

    isEmpty(){
        return this.top === null;
    };
};


module.exports = Stack;