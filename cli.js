#!/usr/bin/env node
/* jshint node: true */

function onError(err, extraData) {
    console.error('ERROR:', err.message);
    
    if (extraData && typeof extraData === 'string') {
        console.error(extraData);
    }
    
    process.exit(1);
}

var data = [];

process.stdin.on('data', function(chunk) {
    data.push(chunk);
});

process.stdin.on('end', function() {
    var str = Buffer.concat(data).toString();
    
    try {
        var jsonData = JSON.parse(str);
        var jsonStr = JSON.stringify(jsonData, void 0, 2);
        console.log(jsonStr);
    } catch(e) {
        return onError(e, '\n' + str);
    }
});

// just in case, also handle errors
process.stdin.on('error', onError);
