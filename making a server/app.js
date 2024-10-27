const express = require('express');
const app = express();

// Listen for requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.sendFile('./documents/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./documents/about.html', { root: __dirname });
});

//redircts
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})
//404
app.use((req, res) => {
    res.sendFile('./documents/404.html', { root: __dirname });

})