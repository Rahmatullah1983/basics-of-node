const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog3.txt');

// readStream.on('data', (chunk) => {
//     console.log('......New chunk.....');
//     console.log(chunk); // Log the data being read from blog2.txt

//     writeStream.write('\nNEW CHUNK\n'); // Write a separator in blog3.txt
//     writeStream.write(chunk); // Write the chunk of data to blog3.txt
// });

readStream.on('end', () => {
    console.log('File reading completed');
    writeStream.end(); // Close the write stream once reading is complete
});

readStream.on('error', (err) => {
    console.log('Error reading file:', err); // Error handling for read stream
});

writeStream.on('error', (err) => {
    console.log('Error writing file:', err); // Error handling for write stream
});

writeStream.on('finish', () => {
    console.log('Writing to blog3.txt completed');
});

//Piping
readStream.pipe(writeStream);