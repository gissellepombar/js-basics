const person = {
    firstName: 'Gisselle',
    lastName: 'Pombar'
}

function studentName (propFirstName, propLastName) {
    const firstName = propFirstName;
    const lastName = propLastName;
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const printName = studentName('Tony', 'Stark');

console.log(printName);
console.log(studentName('St.', 'Mary'));
console.log(studentName(person.firstName, person.lastName));

function sayHello (firstName) {
    console.log('hi ' + firstName);
}

// Invoke the function
sayHello('Gigi');

// Good to have a default parameter...so that the code runs
function sayHelloDefault (firstName = 'Stranger') {
    console.log('Hey there, ' + firstName);
}

// Invoke the function
sayHelloDefault();

function sumAdd (x=0, y=0) {
    let sum = x + y;
    return sum;
}

console.log(sumAdd(5, 100));
