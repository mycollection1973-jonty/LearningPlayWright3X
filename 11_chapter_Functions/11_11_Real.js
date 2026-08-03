// 01-08-2026

function validateResponseCode(status)
{
    if (status >=200  && status <= 300)
    {
        console.log("Request is Fine !!");
    }
}

const validateResponseCode_Exp= function(status1)
{
    if(status1 >=200 && status1 <=300)
        {
            console.log("Request is Fine !!");
        }      
}

const validateResponseCode_Arrow = (status3) =>
{
    if(status3 >=200 && status3<=300)
    {
        console.log("Request is Fine !!");
    }
}

validateResponseCode(200);   // Request is Fine !!
validateResponseCode_Exp(200); // Request is Fine !!
validateResponseCode_Arrow(200);  // Request is Fine !!