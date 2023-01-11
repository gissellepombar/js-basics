// const person = {
// firstName = 'Gisselle';
// lastName = 'Pombar';
// age: 47
// }

// Basic construct of an array
const personarray = [
    'Jiho',  //0
    'Sohn', //1
    47     //2
];

// Mutate a value
personarray[0] = 'Tony';


const fullName = personarray[0] + '' + personarray[1];

// Determines how long the array is (property of an array...not a method)
const totalLength = personarray.length;

console.log(personarray);
console.log('fullName: ', fullName);
console.log('total: ', totalLength);