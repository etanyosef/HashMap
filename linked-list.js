class Node {
    constructor(key, value, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.head = newNode;
            return;
        } 

        let current = this.head;
        while (current.nextNode) {
            if (current.value === value) {
                return;
            }            
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    getValues() {
        let current = this.head;
        const values = [];

        if (!current) {
            return;
        }

        while (current) {
            values.push(current.value);
            current = current.nextNode;
        }

        return values;
    }

    getEntries() {
        let current = this.head;
        let entries = [];

        if (!current) {
            return;
        }

        while (current) {
            // let entry = [];
            // entry.push(current.key, current.value);
            entries.push([current.key, current.value])
            current = current.nextNode;
        }

        return entries;
    }

}