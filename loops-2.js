/* ******* Do while ******* */
// console.log('Do while Loop\n**************');

// let i = 0;
// do {
//     i++;
//     console.log('This is #', i);
// } while (i < 10);

/* ******* While loop ******* */
console.log('While Loop\n**********');
let i = 0;

while (i < 10) {
    console.log('This is #', i);
    i++;
}

/* ******* For loop with break ******* */
console.log('While Loop\n**********');

for (let k = 0; k < 10; k++) {
    if (k === 5) {
        break
    }
    console.log('#', k);
}

/* ******* For loop...in ******* */
const person = {
    firstName: 'Gigi', 
    lastName: 'Pombar',
    age: 47
}

console.log(person);

for (let l in person) {
    if (person[l] === 'Pombar') {
        break;
    }
    console.log('key =>',l);
    console.log('value =>', person[l], '\n');
}

/* ******* For Of Array ******* */

const car = [
    'crosstrek',
    'subaru',
    true,
    true
]

for (let i of car) {
    console.log('value =>', i);
}
