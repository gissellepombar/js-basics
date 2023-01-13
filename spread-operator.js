//Array of prime numbers
const primeNum = [
    2, 
    3,
    5, 
    7,
    11, 
    13
];

// Array of cars 
const car = {
    manufu: 'honda',
    model: 'acura',
    year: 1994,
};

// Array of even numbers
const evenNum = [
    2,
    6,
    8
];

//clog is not the function it references the anonymous function 
const clog = (label, log) => {
    console.log(label,':', log);
}

// Since the function is one line...
const clog2 = (label, log) => console.log(label,':', log);

const newArray = primeNum;

//clog('original array', primeNum);
//clog('new array', newArray);
//primeNum.push(17);
//clog('original array', primeNum);
//clog('new array', newArray);

//Spread Operator
const newArray1 = [...primeNum]
clog('original array', primeNum);
clog('new array', newArray);

primeNum.pop();
clog('original array - pop', primeNum);
clog('original array - pop', newArray1);

// Spread operators with objects
const newCar = {...car}

clog('ori obj', car)
clog('copy obj', newCar);

// Combining two arrays 
const newNumList = [primeNum, evenNum]
const newNumList2 = [...primeNum, ...evenNum]

clog('array combined', newNumList)
clog('array combined', newNumList2)


/*------------------------------------*/
// Spread operators
// 1. 
// 2.

const mathMax = Math.max(...primeNum)
clog('Math max', mathMax);

/*------------------------------------------------------ */

const number1 = [1,3,5,7]
const number2 = [2,4,6,8]

// Create one array with all the values from both arrays
const combinedNum = [number1, number2]

clog('combined array', combinedNum)

const check = combinedNum[0]
clog('check,',check); //prints out entire first array

const combinedNum2 = [...number1, ...number2]
clog('combined array 2', combinedNum2)

const check2 = combinedNum2[0]
clog('check,',check2); //prints out 1

