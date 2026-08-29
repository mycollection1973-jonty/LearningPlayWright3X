// 29-08-2026

class ICICI{

    #balance;

    constructor(name, balance)
    {
        this.name = name;
        this.#balance = balance;
    }

    getBalance()
    {
        return this.#balance;
    }

    setBalance(balance, isCashier)
    {
        if(isCashier)
        {
            this.#balance = balance;
        }
        else
        {
            console.log("Not Allowed!!");
        }
    }
}

let money = new ICICI("John",10000);
console.log(money.getBalance());  // 10000 
money.setBalance(15000, false);  // Not Allowed!!
console.log(money.getBalance());  // 10000

let money2 = new ICICI("Sam", 20000);
console.log(money2.getBalance());  // 20000
money2.setBalance(25000, true);
console.log(money2.getBalance());  // 25000