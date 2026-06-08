import { LinkedList } from "./linked-list.js";

export class HashMap {
    constructor(capacity = 16) {
        this.loadFactor = 0.75;
        this.capacity = capacity;
        this.threshold = this.capacity * this.loadFactor;
        this.buckets = new Array(capacity);
        this.totalLoad = 0;
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
        // calculate load if it exceeds loadFactor, expand
        if (this.threshold <= this.length()) {
            console.log(this.length() + 'expand');
            this.expand();
        }
        
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
            this.buckets[index].append(key, value);
        } else {
            this.buckets[index].append(key, value);
        }
            

        this.totalLoad++;
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets;

        if (!bucket[index]) {
            return null;
        }

        return bucket[index].getEntries();

        // console.log(`${key}:${index} ${bucket[index].getEntries()}`);
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

        buckets.forEach((bucket) => {
            if (bucket) values.push(bucket.getValues());
        });

        return values;
    }

    entries() {
        const buckets = this.buckets;
        const entries = [];

        buckets.forEach((bucket) => {      
            if (!bucket) {
                return;
            } 

            const entry = bucket.getEntries();    
            entries.push(entry);            
        });
        
        return entries;
    }

    expand() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.threshold = this.capacity * this.loadFactor;
        this.buckets = new Array(this.capacity);

        oldBuckets.forEach((bucket) => {
            if (!bucket) return

            let current = bucket.head;
            while (current) {
                this.set(current.key, current.value)
                current = current.nextNode;
            }           
        });

    }

}