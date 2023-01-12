const name = 'Jiho';
const favColor = 'green';

// Concatenation
const fullSentence = 'Hello, ' + name + '. Your favorite color is ' + favColor;
console.log('contact=>', fullSentence);

// Template Literals
const fullSentence2 = `Hello ${name}. Your favorite color is ${favColor}`;
console.log('contact=>', fullSentence2)

//.length 
console.log('string length', fullSentence.length);

//.toUpperCase()
console.log('to upper case', fullSentence.toUpperCase());

//.toLowerCase()
console.log('to lower case', fullSentence.toLowerCase());

//trim: removes space from the front + back
console.log('trim', fullSentence.trim());

//.replace()
const newSentence = fullSentence.replace('Hello', 'Yo');
console.log('replace', newSentence);

//.substring() 
const otherSentence = 'integer'
console.log(otherSentence.substring(0, 3)); //returns int

//.startsWith() gives you a boolean result
console.log('startsWith', otherSentence.startsWith('integer')); //true

//.endsWith() gives you a boolean result
console.log('endsWith', otherSentence.endsWith('integer')); //true

//.includes() gives you a boolean result to determine if 'search term' is in string
const oneMoreSentence = 'Hi Danny, you are not Tony';

const searchTerm = 'Mack';
const result = oneMoreSentence.includes(searchTerm);

console.log(result);

//.indexOf() 
const newWord = 'I like Papaya';

const searchTerm2 = 'y';
const searchTerm3 = 'like';
const result2 = newWord.indexOf(searchTerm2);
const result3 = newWord.indexOf(searchTerm3);

console.log(result2); //11
console.log(result3); //2

//.split() 






