const express = require('express');
const bodyParser = require('body-parser');
 const routes = require('./routes/routes');
//  require('dotenv').config();
 const mongoose = require('mongoose');

// initialize the express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/info');
mongoose.Promise = global.Promise;

// middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// initialize routes
app.use('/', routes );

// Port assignment
port = process.env.Port || 4000,

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});