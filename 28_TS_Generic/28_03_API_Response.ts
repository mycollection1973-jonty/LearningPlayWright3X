// 05-09-2026

function wrapResponse<T>(statuscode: number, data : T): {statuscode: number, data: T}
{
    return{statuscode: statuscode, data: data}
}

let userResp = wrapResponse<string>(200, "admin");
console.log(userResp);  // { statuscode: 200, data: 'admin' }

let flagResp = wrapResponse<boolean>(200, true);
console.log(flagResp);  // { statuscode: 200, data: true }