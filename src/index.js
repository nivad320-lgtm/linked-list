import "./styles.css";

class LinkedList {

    constructor() {
        this.list = [] // empty object.
    }

    append(value) { // value is a string
        // Create new Node
        // Node value = value
        // if list is empty, create new node with head
        // new Node (value, 'head')
        // this.list.append(new Node(value, 'head'))
        if (this.list.length === 0) {
            this.list.append(new Node(value, 'head'));
        }

        // if list is not empty and have a node
        // tmp.next = new Node(value)
        // append it to this.list
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode || null;
    }
}

export {LinkedList, Node}