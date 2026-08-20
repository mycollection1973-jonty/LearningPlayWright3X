// Check whether a number is Prime or Not.

const data = require('fs').readFileSync(0,'utf8');

let count = 0;

for(let i=1;i<=data;i++)
{
    if(data%i==0)
    {
        count++;
    }
}

if(count==2)
{
    console.log(data,"is Prime Number")
}

else
{
    console.log(data,"is not Not Prime Number");
}