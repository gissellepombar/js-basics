const cusine = [
    'thai',
    'JA', 
    'KR',
    'JP',
    'Haitian',
    'IN',
    'CH'
];

console.log('array =>', cusine);

// push() method, enter a new entry at the end of the array
cusine.push('MX');
console.log('array push =>', cusine);

//pop() method, removes the last entry from the array
cusine.pop();
console.log('array-pop =>', cusine)

// unshift: puts the entry in the front 
cusine.unshift('IT');
console.log('array-unshift =>', cusine);

//shift: removes entry in the front
cusine.shift('IT');
console.log('array-shift =>', cusine);

cusine[2] = 'Israeli';
console.log('array-key 20 =>', cusine);
