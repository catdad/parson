#!/usr/bin/env node

var data = [];

process.stdin.on('data', function(chunk) {
    data.push(chunk);
});

process.stdin.on('end', function() {
    var str = Buffer.concat(data).toString();
    
    try {
        var jsonData = JSON.parse(str);
        var jsonStr = JSON.stringify(jsonData, undefined, 4);
        console.log(jsonStr);
    } catch(e) {
        console.error(e.message);
        process.exit(1);
    }
});
