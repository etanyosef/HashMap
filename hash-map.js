import { LinkedList } from "./linked-list.js";

export class HashMap {
    constructor(capacity = 16) {
        this.loadFactor = 0.75;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
        this.bucketLength = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        
        for (let i = 0; i < key.length; i ++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
            this.buckets[index].append(value);
            this.listLength++;
        } else {
            this.buckets[index].append(value);
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets;

        if (!bucket[index]) {
            return null;
        }

        console.log(`${key}:${index} ${bucket[index].getValues()}`);
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets;

        if (!bucket[index]) {
            return false;
        } else {
            return true;
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket) {
            return false;
        }

        this.buckets[index] = null;
        return true;
    }

    length() {
        const buckets = this.buckets;
        let length = 0;

        buckets.forEach(bucket => {
            if (bucket) length++;
        });
        
        return length;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.bucketLength = 0;
    }

    keys() {
        const buckets = this.buckets;
        let keys = [];

        buckets.forEach((bucket, index) => {
            if (bucket) keys.push(index);
        });

        return keys;
    }

    values() {
        const buckets = this.buckets;
        let values = [];

        buckets.forEach((bucket, index) => {
            if (bucket) values.push(bucket.getValues());
        });

        return values;
    }

}