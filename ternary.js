const gender = 'male';

let greeting = 'Hello ma\'am';

if (gender === 'male') {
    greeting = 'Hello sir.'; 
} else {
    greeting = 'Hello ma\'am'
}
console.log(greeting);

//(condition) ? ____ : _____
//? - then
//: - else 
let greeting2 = (gender === 'male') ? 'Hello sir.' : 'Hello ma\'am';

console.log(greeting2);

//let's do another example...

const age = 70;

const message = (age >=21)
                ? 'Drink up!'
                : 'Have some water.'

console.log(message);

//Advanced example: nesting with ternary

const message2 = (age >= 21)
                ? 'Drink all you want.'
                : (age >= 18)
                    ? 'Have some more water.'
                    : 'Please leave now.'
console.log(message2);
