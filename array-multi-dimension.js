const numberArray = [
    'value1',   //0
    'value2',   //1
    'value3',   //2
    [           //3
        'sub-value1', //0
        'sub-value2', //1
        'sub-value3', //2
    ],         
    [           //4
        'sub-valueA', //0
        'sub-valueB', //1
        'sub-valueC', //2
    ],

    {           //5
        name: 'Jiho', 
        gender: 'm'
    },
];

console.log(numberArray[2]); //value3
console.log(numberArray[3]); //prints the entire second array
console.log(numberArray[3],[1]); //prints sub-value2
console.log(numberArray[4][1]); //sub-valueB

console.log(numberArray[5]['name']); //prints name
console.log(numberArray[5].name); //prints name 
