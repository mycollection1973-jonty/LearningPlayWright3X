// 13-08-2026

function test(test, callMewhenDone)
{
    console.log("Hi Start the Test Case");4
    callMewhenDone();
}

test("Verify the login page is working fine", async(page) => {

})

function storeStatus(item, callMeStoreisEmpty)
{
    console.log("Store is busy!!");
    // ...
    console.log("Store is empty!!");
    callMeStoreisEmpty();
}

storeStatus("start shopping", () => {
    console.log("lets start shopping....!!!")
})