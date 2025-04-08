class Queue {
    constructor(numbers = []) {
        this.numbers = Array.isArray(numbers) ? numbers : [numbers];
    }
    enqueue (number) {
        this.numbers.push(number);
    }
    dequeue() {
        console.log("Deleted number:", this.numbers.shift());
    }
    peek() {
        console.log("last number:", this.numbers[0]);
        return this.numbers[0];
    }
    isEmpty() {
        return this.numbers.length === 0;
    }
    clear() {
        this.numbers = [];
    }
    seeQueue() {
        console.log("\nQueue:");
        this.numbers.forEach((num, i) => {
            console.log(`${i + 1}. Number: ${num}`); 
        })
    }
    positiveNumbersQuantity () {
        console.log("\nQuantity of positive numbers:", this.numbers.filter(num => num > 0).length);
        return this.numbers.filter(num => num > 0).length;
    }
}

const randomArray = (length, value) => {
    const randomArray = [];
    for(let i = 0; i < length; i++) {
        randomArray[i] = Math.floor(Math.random() * (value * 2 + 1) - value);
    }
    return randomArray;
}

const main = () => {
    const array = randomArray(15, 25);
    const queue = new Queue(array);
    queue.seeQueue();
    queue.positiveNumbersQuantity();
    queue.peek();
    queue.dequeue();
    queue.seeQueue();
    queue.positiveNumbersQuantity();
}
main();