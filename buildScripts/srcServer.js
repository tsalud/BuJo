//configures our webserver that will serve up the files in our source directory

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';


//stores the port we are going to use
const port = 3000;
//creates instance of express and sets to variable app
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//tell express which route is should handle
//takes in request and response as parameter
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.get('/users', function(req, res) {
    // Hard coding for simplicity. Pretent this hits a real database
    res.json([
        {"id": 1, "firstName":"Bob", "lastName":"Smith,","email":"bob@gmail.com"},
        {"id": 2, "firstName":"Tammy", "lastName":"Norton,","email":"tnorton@yahoo.com"},
        {"id": 3, "firstName":"Tina", "lastName":"Lee,","email":"lee.tina@hotmail.com.com"}
    ]);
});

//tell express to listen on port defined above + error handling
//hard code in the address of the website
app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});

// now open terminal and type node buildScripts/srcServer.js
