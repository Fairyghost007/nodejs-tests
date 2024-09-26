const fs = require('fs');
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log( data);
    }
});