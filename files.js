const fs = require('fs')

// Reading the file with UTF-8 encoding to get the data as a string



fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log(data.toString());
});

//writins files

fs.writeFile('./docs/blog1.txt', 'Hello world', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

fs.writeFile('./docs/blog2.txt', 'Hello world again', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully again ');
    }
});

// directories
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('successfully directory made');
    }
})
//deleteng files
