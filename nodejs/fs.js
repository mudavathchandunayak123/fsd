const fs = require('fs');

fs.writeFile('sample.txt', 'Hello, Welcome to Node.js FS Module!', (err) => {
    if (err) throw err;

    console.log('File created successfully.');

    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('File Content:');
        console.log(data);
    });
});