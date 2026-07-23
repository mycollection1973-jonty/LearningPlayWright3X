//Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.
const data = require('fs').readFileSync(0,'utf8');

for(let i=1;i<=data;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizBuzz");
    }
    else if(i%3==0 && i%5!=0)
    {
        console.log("Fizz");
    }
    else if(i%3!=0 && i%5==0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}