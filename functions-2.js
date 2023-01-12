// There are 4 types of functions --
// I. DO SOMETHING / NO PARAMS
// II. DO SOMETHING / WITH PARAMS
// III. RETURN SOMETHING / NO PARAMS
// IV. RETURN SOMETHING / NO PARAMS

// I. Example
function sayHello() {
    console.log('Hello, world.')
};

sayHello(); //calls the function

// II. Example 
function greetFriend(name) {
    console.log('Hello, ' + name)
};

greetFriend('Joe');

// III. Example
function addTwoPlusTen () {
    const result = 2 + 10;
    return result; 
}
const answer = addTwoPlusTen(); // answer = 2 + 10
console.log(answer);

// IV. Example
function addTwoNumbers(a, b) {
    const result2 = a + b;
    return result2; 
}

const mySum = addTwoNumbers(23, 17);
console.log(mySum);

// Real world type example
function calculateTax(subTotal, taxRate) {
    const salesTax = (subTotal * taxRate).toFixed(2);
    return salesTax;
}