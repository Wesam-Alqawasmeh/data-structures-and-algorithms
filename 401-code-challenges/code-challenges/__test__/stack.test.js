'use strict';

const Stack = require('../Stack&Queue/Stack');


describe('Stack test', () => {
    it('Can successfully push onto a stack', () => {
        let stack = new Stack();

        stack.push('a');
        expect(stack.top.value).toBe('a');
    });

    it('Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();

        stack.push('a');
        stack.push('b');
        expect(stack.top.value).toBe('b');
        expect(stack.top.next.value).toBe('a');
    });

    it('Can successfully pop off the stack', () => {
        let stack = new Stack();

        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
    });

    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();

        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
        expect(stack.pop()).toBe('the stack is empty');
    });

    it('Can successfully peek the next item on the stack', () => {
        let stack = new Stack();

        stack.push('a');
        stack.push('b');
        expect(stack.peek()).toBe('b');
    });

    it('Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();
        stack.push('a');
        expect(stack.top.value).toBeDefined();
    });

    it('Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();

        expect(stack.pop()).toBe('the stack is empty');
        expect(stack.peek()).toBe('the stack is empty');
    });
})