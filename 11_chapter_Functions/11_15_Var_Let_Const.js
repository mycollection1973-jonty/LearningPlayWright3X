// 04-08-2026

// var a = 10;
// console.log(a);  // 10

// // Var - Function Scoped(), Traitor

// function printHello()
// {
//     console.log("Hello People"); // Hello People
//     var a = 20;
//     console.log(a); // 20
//     if(true)
//     {
//         var a = 30;
//         console.log(a); // 30
//     }
//     console.log(a); // 30 it should be 20 but due to var it become 30
// }

// printHello();

// let - Block Scoped

let b = 20;  // Global scope
console.log(b); // 20

function printHello()
{
    console.log("Hello People");  // Hello People
    let b = 30;  // Local scope
    console.log(b); // 30
    if(true)
    {
        let b = 5;
        console.log(b); // 5
    }
    console.log("let->",b);  // let-> 30
}

// calling the function
printHello(); 
console.log(b); // 20

// Let does not allow you to have a re-declaration.
// let a = 10; 
// let a = 10;

// var allow you to have a re-declaration
var a = 10;
var a = 10;

// not allowed
// var nn = "Rohit"
// let nn = "Rohit";

const pi = 3.14;
console.log(pi);
//pi = 3.14566; // Assignment to constant variable
{

}

const a1 = [1,2,3];
a1.push(10);
console.log(a1);  // [ 1, 2, 3, 10 ]

function adbh()
{

}