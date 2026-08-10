// 01-08-2026

//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1()
{
    console.log("hi");
}
name1();

// IIFE

(function()
{
    console.log("Anonymous Fun");
})();  // Anonymous Fun

(function()
{
    console.log("Staging");
})(); // Staging

// Arrow

(()=>
{
    console.log("Setup complete");
})();  // Setup complete