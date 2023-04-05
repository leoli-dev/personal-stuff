import { ArrayStorage } from "./arrayStorage";

const numberStorage = new ArrayStorage<number>();
numberStorage.store(42);
const retrievedNumber = numberStorage.retrieve();
console.log(`Retrieved number: ${retrievedNumber}`); // Output: "Retrieved number: 42"

const stringStorage = new ArrayStorage<string>();
stringStorage.store("hello");
const retrievedString = stringStorage.retrieve();
console.log(`Retrieved string: ${retrievedString}`); // Output: "Retrieved string: hello"

class Pair<TKey extends string, TValue> {
    constructor(public key: TKey, public value: TValue) { }

    display(): string {
        return `${this.key}: ${this.value}`;
    }
}

const nameAgePair = new Pair("John", 30); // TKey is string, TValue is number
console.log(nameAgePair.display()); // Output: "John: 30"

const countryCapitalPair = new Pair("Germany", "Berlin"); // TKey is string, TValue is string
console.log(countryCapitalPair.display()); // Output: "Germany: Berlin"
