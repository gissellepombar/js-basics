// const firstName = 'Gisselle';
// const lastName = 'Pombar';

// basic construct of an object
const person = {
    firstName: 'Jiho',
    lastName: 'Sohn',
    age: 47 //do not have hanging commas

}
// Two ways to access an object

// Dot notation
person.firstName

// bracket notation
person['lastName'];

//Mutate a value in an object
person.firstName = 'Tony';

// Adding new property to an object
person.height = 178;

// Delete a property
delete person.height;

console.log('Hello ' + person.firstName + ' ' + person.lastName);
console.log('age: ', person.age);
console.log('height: ', person['height']);
console.log('person object: ', person);
