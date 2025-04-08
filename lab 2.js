

function TASK2 () {

    class Node {
        constructor (data) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }
    class DoublyLinkList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        add(data) {
            const newNode = new Node(data);
            if(this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.size++;
        }
        remove(index) {
            if (index < 0 || index >= this.size) {
                return "Invalid index";
            }
            let current = this.head; 
            if (index == 0) {
                this.head = current.next;
                if (this.head) {
                    this.head.prev = null;
                }
                if (!this.head) {
                    this.tail = null;
                }
            } else if (index == this.size - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            }else {
                for(let i = 0; i < index; i++) {
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev =  current.prev;
            }
            this.size--;
            return current.data;
        }
        getSize () {
            return this.size;
        }
        getElement(index) {
            let current = this.head;
            for (let i= 0; i < index; i++) {
                current = current.next;
            }
            return current.data;
        }
        outputList() {
            let result = [];
            let current = this.head;
            while(current) {
                result.push(current.data);
                current = current.next;
            }
            return "[" + result.join(",") + "]";
        }
    
        addOddNumbers() {
            let current = this.head;
            while(current) {
                if (current.data % 2 !== 0) {
                    this.size++;
                    let newNode = new Node(current.data);
                    newNode.next = current;
                    newNode.prev = current.prev; 
    
                    if (current.prev) {
                        current.prev.next = newNode;
                    }
                    else {
                        this.head = newNode;
                    }
                }
                current = current.next;
            } 
        }
        randomArray(size, range) { // positive and negative
            let array  = [];
            for(let index = 0; index < size; index++) {
                array[index] = Math.floor(Math.random() * (range * 2) + 1) - range;
            }
            return array;
        }
    }
    
    const listTask = () => {
        const doublyList = new DoublyLinkList();
        doublyList.randomArray(15, 30).forEach(el => {
            doublyList.add(el);
        })
        console.log("Initial array of numbers:", doublyList.outputList());
        console.log("Size of initial array:", doublyList.getSize());
    
        doublyList.remove(0);
        doublyList.remove(3);
    
        doublyList.add(67);
        doublyList.add(33);
        doublyList.add(17);
    
        doublyList.addOddNumbers();
    
        console.log("\nArray after some operations:", 
            doublyList.outputList());
        console.log("Size of array after:", doublyList.getSize());
}
listTask()

}