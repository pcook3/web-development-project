const express = require('express');
const app = express();
const port = 2000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; 
    
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});