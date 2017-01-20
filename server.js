"use strict";

var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');

var httpServer = http.createServer(app).listen(8001);

//Routes
var routes = {};
routes.quizz = require('./quizz');

app.all('*', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method)
        return res.send(200);
    next();
});

// basic functions

// app.post('/user/verifyToken', routes.users.verifyToken);

app.get('/quizz', routes.quizz.fetchQuizz);



console.log('Intranet API is starting on port 8001');