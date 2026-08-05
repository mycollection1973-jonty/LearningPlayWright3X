// 04-08-2026

function getStatus(code)
{
    if (code >= 200 && code < 300)
    {
        return "Success";
    }
    else if (code >= 400 && code < 500)
    {
        return "Client Error";
    }
    else if (code >= 500)
    {
        return "Server Error";
    }
    else
    {
        return "Unknown";
    }
}

console.log(getStatus(200));  // Success
console.log(getStatus(404));  // Client Error
console.log(getStatus(500));  // Server Error

// Returns nothing → undefined

function logTest(name)
{
    console.log(`Running: ${name}`);
    // no return statement
}
logTest("Hi this is a log");  // Running: Hi this is a log


// Array

function aaa()
{
    return [2, 5,6, 7];
    /// return {"name : roohit"}; - object
}