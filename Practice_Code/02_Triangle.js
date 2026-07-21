const data = require('fs').readFileSync(0,'utf8');
//let sides = data.trim().split(" ");
let sides = data.trim().split(" ").map(Number);
let side1 = sides[0];
let side2 = sides[1];
let side3 = sides[2];

if(side1 == side2 && side2== side3)
{
    console.log("EQUILATERAL Triangle");
}
else if(side1 == side2 || side2 == side3 || side1 == side3)
{
    console.log("ISOCELES Triangle");
}
else
{
    console.log("SCALENE Triangle");
}