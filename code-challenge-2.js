//Given an arr of numbers, write a function that returns the largest number in that array(w/o using Math.max).

function largestNum(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
        maxNum = arr[i];
        }
    }
    return maxNum;
}

const myArray = [23, 74, 18, 42, 69, 91, 88];

const largest = largestNum(myArray);

console.log(largest);