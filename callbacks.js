function sayHello() {
    console.log('Hello there.')
}

function goSlow() {
    setTimeout(() => console.log('Slow...', 500))
}

function sayGoodbye() {
    console.log('Goodbye.')
}

sayHello()
sayGoodbye()

//what if I want to guarentee that hello comes before goodbye?

function sayHelloThen(next) {
    console.log('Hello there!')
    next()
}
//anonymous function : () => console.log('Goodbye!')
sayHelloThen(() => console.log('Goodbye!'))