// 01-08-2026

function greet(name)
{
    return `Hello. ${name}`;
}

const greet1 = function(name1)
{
    return `Hello. ${name1}`;
}

// Arrow Fn

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, 
// remove the curly braces, and use the =>

const greet2 = (name2) => `Hello. ${name2}`;

console.log(greet("Jim")); // Hello. Jim
console.log(greet1("Sam")); // Hello. Sam
console.log(greet2("Mani")); // Hello. Mani
