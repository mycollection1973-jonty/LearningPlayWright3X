// 27-08-2026

// Private Fields (#) — Hidden Data
// PUBLIC Fields 

let v = 10;
class Credentials{
    #apiKey;   // Instance / Class variable
    user;

    constructor(user, key)
    {
        this.user = user;   // we dont declare variable in line 8,9 then also we can use this here
        this.#apiKey = key;
    }

    // Custom made fuction by us
    functionForHash()
    {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_123");
console.log(cred.apiKey);  // undefined
console.log(cred.user); // admin
// console.log(cred.#apiKey);// not allowed