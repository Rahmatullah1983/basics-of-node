// how to import modules
const xyz = require('../node-project/people');
console.log(xyz)

const os = require('os')
console.log(os.platform(), os.homedir());
const fs = require('fs');

// Reading the file with UTF-8 encoding to get the data as a string
fs.readFile('./docs/blog1', (err, data) => {
    if (err) {
        console.log('Hi');
        return;
    }
    console.log(data);  // The content of the file is now a string
});


//writins files

// directories

//deleteng files
