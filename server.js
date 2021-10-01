// importing express module

const express = require('express');

const path = require('path');

// defining port
const port = 8080;

const app = express();

// setting up monogdb
const db = require('./config/mongoose')

const repository = require('./models/product');

app.use(express.urlencoded());

app.use('/api',require('./routes/index'));

// express listening to the port and returning
app.listen(port,function(err){
    if(err){
        console.log("Error In Running The Server!");
        return;
    }
    console.log("Server Running!");
})