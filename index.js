const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const routes = require('./routes/info');
const cors = require('cors');

// create our express app
const app = express();


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin:'*'
}));

// routes
app.use('/', routes);


// Port assignment
port = process.env.Port || 3000;

//start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});