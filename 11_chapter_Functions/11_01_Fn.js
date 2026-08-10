// 01-08-2026

// Without functions — repeated logic

// let score1 = 85;
// let result1 = score1 >= 70 ? "pass" : "fail";
// console.log(result1);  // pass

// let score2 = 45;
// let result2 = score2 >= 70 ? "pass" : "fail";
// console.log(result2);  // fail

//Define

function getResult(score)   // score = parameter
{
    return score >= 70 ? "pass" : "fail";
}

//Calling

getResult(85);  // 85 = argument
getResult(45);
console.log(getResult(85));  // pass
console.log(getResult(45));  // fail