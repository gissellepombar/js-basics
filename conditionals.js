// There are 3 main ways to create conditionals in code:
//1. if (comes in many flavors)
//2. switch (great for many conditions)
//3. ternary (shorthand for if/else)

// First let's setup some variables
const age = 18;

// Let's start with the most basic if statement:
if (age >= 18) {
    console.log('Welcome. Come on in!')
}

//What about people that aren't yet 18?
//Let's use an if...else 

if (age >= 21) {
    console.log('Drink up!');
} else {
    console.log('Here\'s some water.')
}

//console.log("Andy asked, \"If you're using a quote character, can you do the same?\".");

//What if we have more than 2 possibilities?
//Then we can use an else if

const hour = 9;

if (hour < 11) {
    console.log('Good morning.');
} else if (hour < 17) {
    console.log('Good afternon.');
} else if (hour < 22) {
    console.log('Good evening.');
} else {
    console.log('Go to bed!');
}

// When dealing with MANY different conditions, we often use a switch

const yourPet = 'cat';

switch(yourPet) {
    case 'dog':
        console.log('woof woof');
        break;
    case 'cat':
        console.log('meow');
        break;
    case 'bird':
        console.log('tweet tweet');
        break;
    case 'fox':
        console.log('What does the fox say?');
        break;
    case 'racoon':
    case 'lizard':
    case 'snake':
        console.log('That\s a crazy pet, yo!'); //response for all 3
        break;
    case 'turtle':
        console.log('I love turtles!');
        break;
    case 'chupacabra':
    case 'ferret':
    default: 
        console.log('Wow, I never even heard of that!')
}

// For more on ternaries, look at ternary.js
