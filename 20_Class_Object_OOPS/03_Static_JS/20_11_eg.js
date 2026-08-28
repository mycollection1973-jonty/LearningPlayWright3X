// 27-08-2026

let a = 10;
class Car{
    //b = 10;  // can't assign value here
    b;
    constructor()
    {
        console.log(a);
        this.b = 11;  // OP is not coming 
    }
}

let obj = new Car();