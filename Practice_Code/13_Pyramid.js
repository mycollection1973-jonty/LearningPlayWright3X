//Print a pyramid pattern using stars. For input n, print n 
// rows where row i has (n-i) leading spaces and (2*i-1) stars.

const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);

for(let i=1;i<=n;i++)
{
    let row = "";
    for(let j=1;j<=n-i;j++)
    {
        row += " ";
    }

    for(let j=1;j<=2*i-1;j++)
    {
        row += "*"
    }
    console.log(row);
}
