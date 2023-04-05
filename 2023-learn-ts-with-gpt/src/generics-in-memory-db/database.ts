export interface Identifiable {
    id: number;
}

export class Database<T extends Identifiable> {
    private records: Map<number, T> = new Map();

    create(record: T): void {
        this.records.set(record.id, record);
    }

    read(id: number): T | undefined {
        return this.records.get(id);
    }

    update(record: T): boolean {
        if (this.records.has(record.id)) {
            this.records.set(record.id, record);
            return true;
        }
        return false;
    }

    delete(id: number): boolean {
        return this.records.delete(id);
    }
}
