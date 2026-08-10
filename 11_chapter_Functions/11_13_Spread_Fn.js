// 04-08-2026

function add(a, b, c)
{
    return a+b+c;
}

let num = [1,2,3];
console.log(add(...num));  // 6
//console.log(...add[1,2,3]); // add[(1 , 2 , 3)] is not iterable (cannot read property undefined)

function hasError(...codes)
{
    return codes.some(c => c>=400)
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 400, 500];
console.log(hasError(...responseCodes)); // true
console.log(hasError(...responseCodes2)); // true