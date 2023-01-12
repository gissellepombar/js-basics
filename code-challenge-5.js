//

const myArray = [
    23,     //0
    74,     //1
    18,     //2
    42,     //3
    69,     //4
    91,     //5
    88      //6
];

function evenNum (arr) {
    let evenN = 0;
    let newArr = [];


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0){
            newArr[evenN] = arr[i];
            evenN++;
        }
    }
    return newArr;
}

let ans = evenNum(myArray)
console.log(ans);
