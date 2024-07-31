const express = require('express');
const bodyParser = require('body-parser');  
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { 
        firstName, lastName, address, phone, email,
        productType, profileType, color, texture, gauge,
        quantity, length } = req.body;
    console.log('Form data received:', { 
        firstName, lastName, address, phone, email,
        productType, profileType, color, texture, gauge, quantity, length});
    // Show an alert to the user
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
