// Prime Number

const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);

let count = 0;

for(let i=1;i<=num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count == 2)
{
    console.log("Prime Number");
}
else
{
    console.log("Not Prime Number");
}
