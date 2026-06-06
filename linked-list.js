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
            current = current.nextNode;
        }

        if (current.key === key) {
            current.value = value;
            return;
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
            entries.push([current.key, current.value])
            current = current.nextNode;
        }

        return entries;
    }

}