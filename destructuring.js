const number = [
    1,2,3,4,5,7,8,100,2345215,4353145
]

const clog = (label, log) => {
    console.log(`${label}: ${log}`);
}

const render = number[1]

clog('old way,', render)

/**----------------- */

const [a, b, c] = number
clog('destructure', a)



/**----------------- */
const person = {
    firstName : 'Gi',
    lastName : 'Pombar',
    age : 26,
    hair : 'brown',
    eye : 'brown',
    height : 63,
    gender : 'f'
}

//instead of making a variable and indexing into the object...destructure it

const {firstName, lastName, age, hair, eye, height, gender } = person

clog('hair', hair)


