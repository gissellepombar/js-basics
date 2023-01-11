/*
Create your own person object with...
    first name
    last name 
    fav color
    age
    hobby

Create an array with your fav movie * 5

Create a function that generates the following + console.log outputs
1 Hi my full name is $firstN $lastN. Fav color is $favC and love $hobby.
2 I like these 5 movies. $movie0, $movie1, etc...
3 Create a math function that takes 3 parameters.
*/

//1 Creating object named person
const person = {
    firstName: 'Gisselle',
    lastName: 'Pombar',
    favColor: 'yellow',
    hobby: 'weight-lifting'
};

//1 Function that returns string
function aboutMe (fName, lName, color, hobby) {
    const s1 = 'Hi my full name is ' + fName + ' ' + lName + '. My favorite color is ' + color + ' and I love ' + hobby + '.';
    return s1;
};

//1 Invoking function that takes arguements from object(person) 
console.log(aboutMe(person.firstName, person.lastName, person.favColor, person.hobby));

//2 Creating an array of movies
const favMovies = [
    'Good Will Hunting',
    ' Spirited Away',
    ' White Chicks',
    ' Perfume',
    ' The Menu'
];

//2 Function that returns a string with the values from the array
function topMovies (arr) {
    const s2 = 'I like these 5 movies: ' + arr + '.';
    return s2;
};

//2 Invoke bestMovies function
console.log(topMovies(favMovies));

//3 Multiplication function that takes 3 parameters
function multiNum (x, y, z) {
    const multiply = x * y * z;
    return multiply;
};

console.log(multiNum(2, 2, 2));
