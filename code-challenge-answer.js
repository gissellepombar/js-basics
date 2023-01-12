//Given an array of numbers, write a function to return the sum

function calculateSum(list) {
    //lets start with the first number of the array
    let sum = list[0]
    //loop through the array as long as we still have numbers...
    for (let i = 1; i<list.length; i++) {
        //...add the next number
        sum = sum + list[i]
    }
    //finally return the sum
    return sum;
}

const myArray = [23, 74, 18, 42, 69, 91, 88];

const mySum = calculateSum(myArray);

console.log(mySum)