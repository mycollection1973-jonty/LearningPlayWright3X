// 04-08-2026

// let a = "Phil";

// if(true)
// {
//     console.log(a); // let is block scope right now
//     let a = "temp";  // ReferenceError: Cannot access 'a' before initialization
// }

var a = "Bob";

if(true)
{
    console.log(a);  // Bob
    var a = "temp";
}


// Temporal Dead Zone

//  Global Scope
//  a = "Phil"
//  Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
//   console.log(a);