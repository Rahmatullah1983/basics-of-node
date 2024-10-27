const fs = require('fs')

// Reading the file with UTF-8 encoding to get the data as a string



fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log(data.toString());
});

//writting files

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
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully directory made');
        }
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully directory deleted');
        }
    })
}


//deleteng files

if (fs.existsSync('./docs/blog2.txt')) {
    fs.unlink('./docs/blog2.txt', (err) => {
        if (err) {
            console.log('Error deleting file:', err);
        } else {
            console.log('File deleted successfully');
        }
    });
} else {
    console.log('File does not exist');
}
