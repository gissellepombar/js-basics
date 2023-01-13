function addTwoNums(a,b) {
    return a + b
}

const add2Nums = (a, b) => {
    return a + b
}

const squareNum = a => {
    return a ** 2
}

//If the function is only line,
//We can leave off the {} and the return

const squareNum2 = a => a ** 2

console.log(squareNum2(5))

const aspectRatio = (w, h) => w/h

const sayHey = () => console.log('Ho')

sayHey()
sayHey()
sayHey()

//JIHO
//ES 5

//Functional decoration
function sayHello() {

}
//----------------------------------------

//Functional expressive 
const saidHello = () => {

}
//----------------------------------------

const saidHi = (a, b) => {return console.log('something')}

//one parameter

const saidYo = a => {return console.log('something')}
