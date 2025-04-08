const RandomArray = (range) => {
    let random = [];
    for (let i = 0; i < 55; i++) {
        let number = Math.floor((Math.random() * (range * 2)) - range);
        if (!random.includes(number)) {
            random.push(number);
        }
    }
    return random;
}

const outputArray = (array = null, sortObj = null ) => {
    let res = "";
    if (Array.isArray(array) && array.length > 0) {
        console.log("Initial array: " + "[ " + array.join(", ") + " ]");
    }else if (sortObj) {
        switch(sortObj.choice) {
            case true: 
                res += "ascending"; break;
            case false:
                res += "descending"; break;
        }
        console.log(`\n\nSorted array by selection (${res}): ${"[" + 
            sortObj.array.join(", ") + "]"}`)
    }
    else {
        console.log("Invalid arguments!");
    }
}

const sortArrayBySelection = (array, choice) => {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (choice == true) {
                if (array[j] < array[min])  min = j
                
            }else if (choice == false) {
                if (array[j] > array[min])  min = j
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
};

const task5 = () => {
    // true - ascending sort, false - descending sort
    const ascendingSort = false;

    const array = RandomArray(45);
    outputArray(array);
    
    let sortedArray = sortArrayBySelection(array,ascendingSort);
    outputArray(null , {array: sortedArray, choice:ascendingSort});
}
task5();
