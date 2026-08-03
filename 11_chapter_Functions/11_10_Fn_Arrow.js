// 01-08-2026

function doubleMe(a)
{
    return a*2;
}

const doubleA = (a1) => a1*2;
console.log(doubleA(10));  // 20

const getEnv = () => "Staging";
console.log(getEnv()); // Staging


//Multiline

const getResult = (score) =>
{
    if(score > 70) return "Pass";
    return "Fail";
}

console.log(getResult(78)); // Pass
console.log(getResult(43)); // Fail