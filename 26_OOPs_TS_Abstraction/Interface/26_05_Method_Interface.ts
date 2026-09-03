// 03-09-2026

interface Calculator
{
    add(a:number, b: number) : number;
    subtract(a:number, b: number) : number;
}

const calc : Calculator = {
    add : (a,b) => a+b,
    subtract : (a,b) => a-b
}

calc.add(3,4);

interface India
{
    standUpNationalAnthem(a:string) : string;
}

const rama : India = {
    standUpNationalAnthem : (a) => ""
}