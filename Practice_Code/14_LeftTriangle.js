// Print a left-aligned triangle pattern. For input n, print n rows in reverse order.

const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);

for(let i=n;i>=0;i--)
{
    let row = "";
    for(let j=1;j<=i;j++)
    {
        row += "*";
    }
    console.log(row);
}