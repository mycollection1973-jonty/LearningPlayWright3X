// 01-09-2026

// Primitive types

let name : string = "David";
let age : number = 26;
let pi : number = 3.14;
let distance_to_moon : number = 398764566321;
// let pi : float = 3.14;
let isActive : boolean = true;
let nothing : null = null;
let notDefined : undefined = undefined;

// Arrays
let numbers : number[] = [1, 2, 3];
let names : Array<String> = ["Jake", "Jane"];

// Any (avoid when possible)  
let anything : any = "hello";

// Unknown (safer than any)  
let unknown : unknown = "hello";

let message : string = "Hello, JavaScript";
let count : number = 89;

console.log("Message: ", message);  // Message:  Hello, JavaScript
console.log("Count: ",count);  // Count: 89
console.log("Is Active: ",isActive); // Is Active: true