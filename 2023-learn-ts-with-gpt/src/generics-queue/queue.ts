export class Queue<T> {
    private queue: Array<T> = new Array<T>();

    enqueue(item: T): void {
        this.queue.push(item);
    }

    dequeue(): T | undefined {
        return this.queue.length ? this.queue.shift() : undefined;
    }

    size(): number {
        return this.queue.length;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }
}