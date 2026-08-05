// 01-08-2026

// Type 1 - No param, No Return -> final return undefined.
// Define

function greet()
{
    console.log("Hey");
}

// No Param and no Return (void)

// Called
greet();  // Hey
greet();  // Hey
greet();  // Hey

let output = greet();  // Hey
console.log(output);  // undefined
console.log(typeof output); // undefined


function openBrowser()
{
    console.log("Open the browser");
    // open the browser
}