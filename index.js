const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body;

    const {
        userId,
        emailId,
        collegeRollNumber,
        array
    } = data;

    const evenNumbers = array.filter(num => num % 2 === 0);
    const oddNumbers = array.filter(num => num % 2 !== 0);
    const upperCaseAlphabets = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    const response = {
        status: 'Success',
        userId,
        emailId,
        collegeRollNumber,
        evenNumbers,
        oddNumbers,
        upperCaseAlphabets
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});