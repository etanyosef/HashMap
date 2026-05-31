class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node(value);

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

    get() {
        let current = this.head;
        let values = '';

        while (current) {
            console.log(current.value)
            values += `(${current.value})->`;
            current = current.nextNode;
        }

        values += 'null';
        console.log(values);
    }

}