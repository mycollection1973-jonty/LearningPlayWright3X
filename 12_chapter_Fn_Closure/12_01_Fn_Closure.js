// 06-08-2026

// Scope in Functions

// let env = "staging";  // global variable

// function setupConfig()
// {
//     let timeout = 3000;  // local variable
//     console.log(env);    // ✅ can access global  statging
//     console.log(timeout);// ✅ can access local   3000
// }

// setupConfig();
// console.log(env);      // staging
// console.log(timeout);  // ❌ ReferenceError — not accessible outside


// --------------

let g_x = 10;

function outer()
{
    let x = 10;

    function inner()
    {
        let y = 20;
        console.log(x);  // ✅ inner can access outer's variables  // 10
    }

    inner();
    console.log(y)  // ❌ outer cannot access inner's variables
}

outer();