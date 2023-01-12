// Find odd numbers in an array and return those numbers in an array

const myArray = [
    23,     //0
    74,     //1
    18,     //2
    42,     //3
    69,     //4
    91,     //5
    88      //6
];

function findOdd(arr) {
    let newArr = [];
    let newArrId = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            //console.log('newArrId', newArrId)

            newArr[newArrId] = arr[i]
            newArrId++
            //console.log(newArr)
        }

    }
    return newArr;
}

const oddNumbers = findOdd(myArray)

console.log(oddNumbers)