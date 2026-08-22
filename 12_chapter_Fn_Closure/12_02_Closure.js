// 06-08-2026

function startBrowser()
{
    let name = "edge";

    function installBrowser()
    {
        console.log(name);   // edge
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

//installBrowser();  // installBrowser is not defined  
// inner function not allowed to call outside