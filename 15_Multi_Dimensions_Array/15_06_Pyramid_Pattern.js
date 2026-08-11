//  11-08-2026

//   *
//  ***
// ***** 

let n = 6;

for(let i=1;i<=n;i++)
{
    let rows ="";
    for(let j=1; j<=n-i;j++)
    {
        rows += " ";
    }

    for(let j=1;j<=2*i-1;j++)
    {
        rows = rows + "*";
    }
    console.log(rows);
}