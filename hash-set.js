import { LinkedList } from "./linked-list.js";

export class HashSet {
    constructor(capacity = 16) {
        this.capacity = capacity;
        this.loadFactor = 0.75;
        this.threshold = this.capacity * this.loadFactor;
        this.buckets = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
            this.buckets[index].append(key);
        } else {
            this.buckets[index].append(key);
        }
    }

    get(key) {
        
    }
}