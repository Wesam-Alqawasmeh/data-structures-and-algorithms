'use strict';

const Queue = require('../Stack&Queue/Queue');

describe('Queue test', () => {

    it('Can successfully enqueue into a queue', () => {
        let queue = new Queue();

        queue.enqueue(1);
        expect(queue.front).toBeDefined();
        expect(queue.reare).toBeDefined();
        expect(queue.length).toBe(1);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front.value).toBe(1);
        expect(queue.reare.value).toBe(2);
        expect(queue.length).toBe(2);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front.value).toBe(1);
        expect(queue.reare.value).toBe(2);
        expect(queue.length).toBe(2);
        expect(queue.dequeue()).toBe(1);
    });

    it('Can successfully peek into a queue, seeing the expected values', () => {
        let queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    });

    it('Can successfully empty a queue after multiple dequeues', () => {
        let queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).not.toBeDefined();
    });

    it('Can successfully instantiate an empty queue', () => {
        let queue = new Queue();
        expect(queue.front).toBeNull();
        queue.enqueue(1);
        expect(queue.front.value).toBe(1);
    });

    it('Calling dequeue or peek on empty queue raises exception', () => {
        let queue = new Queue();
        expect(queue.dequeue()).not.toBeDefined();
        expect(queue.peek()).not.toBeDefined();
    });
});