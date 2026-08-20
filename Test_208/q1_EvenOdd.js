// Check whether a number is Even or Odd.

const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);

    if(num%2==0)
    {
        console.log("Even Number");
    }

    else
    {
        console.log("Odd Number");
    }    