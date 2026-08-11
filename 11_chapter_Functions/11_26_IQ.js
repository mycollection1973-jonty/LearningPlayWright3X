// 06-08-2026

greet("Andrew");

function greet(name)    // not good use
{
    console.log("Hi");  // Hi
    return `Hello, ${name}!`;
}


// sayHi("Clive");  //  ❌ TypeError: sayHi is not a function

// const sayHi = function(name)
// {
//     return `Hi, ${name}!`;
// }