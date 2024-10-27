const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    // Log a random number for each request
    const num = _.random(0, 20);
    console.log(num);


    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    // Ignore favicon requests
    if (req.url === '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'image/x-icon' });
        return res.end();
    }

    // Determine the file path based on the requested URL
    let path = './documents/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // Redirect from /about-me to /about
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            return res.end();

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end('Error: File not found');
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});



// Original array 
let array = [1, 2, 2, 3, 4]

// Printing original array  
console.log("Array : ", array)

// Looking for value 3 from Last index   
let index = _.lastIndexOf(array, 2)

// Printing the Index of the value  
console.log("Index : ", index)



let hold = _.once(function (trap) {
    console.log(trap + '!');
});

// Calling hold multiple times
hold('Logged in to the console');
hold('GfG');
hold('CS');
