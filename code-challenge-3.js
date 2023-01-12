// Find odd numbers in an array
function oddNumbers(arr) {
    let oddN = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddN = console.log(arr[i]);
        }
    }
    return oddN;
}

const myArray = [23, 74, 18, 42, 69, 91, 88];
oddNumbers(myArray);

