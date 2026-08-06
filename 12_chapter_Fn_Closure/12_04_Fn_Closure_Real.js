// 06-08-2026

const { run } = require("node:test");

function maxretryTracker(max)
{
    let attempts = 0;
    function tryAgain(testName)
    {
        attempts++;
        if(attempts>max)
        {
            return `${testName} exceeds max retries ${max}`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain
}

let runTCRetry = maxretryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));