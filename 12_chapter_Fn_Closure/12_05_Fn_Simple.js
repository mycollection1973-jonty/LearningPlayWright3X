// 06-08-2026

function makeRateLimiter(limit)
{
    let call = 0;
    function check()
    {
        call++;
        return call <= limit;
    }
    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());  // true
console.log(limiter());  // true
console.log(limiter());  // true
console.log(limiter());  // false