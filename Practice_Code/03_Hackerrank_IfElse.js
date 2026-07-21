console.log("Enter marks : ")
const data = require('fs').readFileSync(0, 'utf8');
    var marks = Number(data);
    //var MARKS_TEST = marks;
    
    if(marks > 90)
    {
        console.log('AA');
    }
    else if(marks > 80 && marks <=90)
    {
        console.log('AB')
    }
    else if(marks > 70 && marks <=80)
    {
        console.log('BB')
    }
    else if(marks > 60 && marks <=70)
    {
        console.log('BC')
    }
    else if(marks > 50 && marks <=60)
    {
        console.log('CC')
    }
    else if(marks > 40 && marks <=50)
    {
        console.log('CD')
    }
    else if(marks > 30 && marks <=40)
    {
        console.log('DD')
    }
    else
    {
        console.log('FF');
    }

// In the terminal:
// Type 15
// Press Enter
// Press Ctrl+Z
// Press Enter