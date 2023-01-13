function doSomething() {
    console.log('SOMETHING')
}

console.log('START')


setTimeout(doSomething, 0)

setTimeout(function doSomething () {
    console.log('OTHER THING')
}, 1000)


console.log('END')

/*-------------------------------------------------------------------------------------------------------------*/
//Traditional Declarative Function  
setTimeout(function doSomething () {
    console.log('OTHER THING')
}, 1000)

// Anonymous declarative function: function with no name 
setTimeout(function () {
    console.log('TWO SEC: OTHER THING')
}, 2000)

// Anonymous Expressive Function: big arrow
setTimeout(() => {
    console.log('THREE SEC: OTHER THING')
}, 3000)

// Expressive functions
//const myFunct = () => {}
const addTwoNumbers = (a,b) => {return a + b}

//Expressive function with only 1 parameter
const squareANum = a => {return a * a}

