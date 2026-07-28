//25-07-2026

let browser = ["chrome","firefox","safari","opera","edge"];
console.log(browser.length); //5

browser.pop();
//console.log(browser);  // [ 'chrome', 'firefox', 'safari', 'opera' ]

let removed = browser.shift();
// console.log(browser);  //[ 'firefox', 'safari', 'opera', 'edge' ]
// console.log(removed);  // chrome

for(  let i=0;i<browser.length;i++)
{
    console.log(browser[i])
    if(browser[i]==="opera")
    {
        console.log("Opera doesn't support Automation Now!");
    }
}