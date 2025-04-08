const task1 = () => {


    function solutionAlgorithm(x, a, b, array) {
    
            if (x < 0)  array.push(`invalid value! (x = ${x}) \n`);
    
            if (x >= 0 && x < 1)  console.log( `First (x = ${x}): ` + 
                ((b * Math.pow(x, 2)) + (x - 6)), "\n");       
    
            if (x == 1) console.log(`Second (x = ${x}): `, 
                Math.pow(Math.sqrt(a*x + b), -1), "\n");
    
            if (x > 1 && x < 9 ) console.log(`Third: (x = ${x}): `, Math.cos(x), "\n");
    }
    
    let x = 1; let a = 5; let b = 7;
    let errorArray = [];
    solutionAlgorithm(x, a, b, errorArray);
    x = 0;
    solutionAlgorithm(x, a, b, errorArray);
    x = -1;
    solutionAlgorithm(x, a, b, errorArray);
    x = 0;
    solutionAlgorithm(x, a, b, errorArray);
    x = -1;
    solutionAlgorithm(x, a, b, errorArray);
    
    errorArray.forEach((er) => {
            console.log(`error: ${er}`);
    });
    console.log("\n\n");
    
    }
    
    task1();