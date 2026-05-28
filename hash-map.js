export class HashMap {
    constructor(capacity = 16) {
        this.loadFactor = 0.75;
        this.capacity = capacity;
        this.table = new Array(capacity);
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

        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index] = value;

        return index;
    }

    get(key) {
        const index = this.hash(key);

    }

}