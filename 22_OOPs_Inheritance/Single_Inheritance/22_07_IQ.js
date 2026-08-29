// 29-08-2026

class Report{
    generate(data)
    {
        console.log("Raw data: " + data);
    }
}

class HTMLReport extends Report{
    generate(data)
    {
        console.log("<html><body" + data + "</body></html>");
    }
}

class JSONReport extends Report{
    generate(data)
    {
        console.log('{"report": "' + data + '"}');
    }
}

class TextReport extends Report{
    generate(data)
    {
        console.log("=== REPORT ===\n" + data + "\n=============");
    }
}

let reports = [new HTMLReport(), new JSONReport(), new TextReport()]
reports.forEach(function(report){
    report.generate("5 tests passed, 1 failed");
    console.log("-----")
})

//<html><body5 tests passed, 1 failed</body></html>
//-----
//{"report": "5 tests passed, 1 failed"}
//-----
//=== REPORT ===
//5 tests passed, 1 failed
//=============
//-----