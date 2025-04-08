const randomArray = (size, range) => { // positive and negative
            let array  = [];
            for(let index = 0; index < size; index++) {
                array[index] = Math.floor(Math.random() * (range * 2) + 1) - range;
            }
            return array;
        }
        const deleteDublicates = (array) => {
            let index = 1;
            while(index < array.length) {
                if (array[index] == array[index - 1]) {
                    for (let inner = index; inner <array.length - 1; inner++) {
                        array[inner] = array[inner + 1];    
                    }
                    array.length--;
                    index--;
                }
                else {
                    index++;
                }
            }
            return array;
        }
        
        
        function main () {
            let array = randomArray(40, 1);
            console.log("\nIntitial array:\n","[" + array.join(",") + "]");
            
            deleteDublicates(array);
            
            console.log("\n\nArray after deleting dublicates:\n",
            "[" + array.join(",") + "]\n");
        }
        main()