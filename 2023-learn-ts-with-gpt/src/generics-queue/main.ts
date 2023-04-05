import { Queue } from "./queue";

const stringQueue = new Queue<string>();
stringQueue.enqueue('Hello');
stringQueue.enqueue('World');
stringQueue.enqueue('!');

if (3 === stringQueue.size()) {
    console.log('Size is correct!');
}

stringQueue.dequeue();
stringQueue.dequeue();
const lastItem = stringQueue.dequeue();

if ('!' === lastItem) {
    console.log('Last element match!');
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
numberQueue.enqueue(5);
numberQueue.enqueue(8);

console.log(numberQueue);