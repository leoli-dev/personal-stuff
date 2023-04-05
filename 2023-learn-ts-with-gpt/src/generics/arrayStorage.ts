export interface Storage<T> {
    store(value: T): void;
    retrieve(): T;
}

export class ArrayStorage<T> implements Storage<T> {
    private items: T[] = [];

    store(value: T): void {
        this.items.push(value);
    }

    retrieve(): T {
        return this.items.pop() as T;
    }
}