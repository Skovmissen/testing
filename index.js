"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var greeting_1 = require("./greeting");
var app = express();
app.set('port', (process.env.PORT || 5000));
app.get("/", function (req, res) {
    console.log("Request!");
    res.send(greeting_1.greeting(new Date()));
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
