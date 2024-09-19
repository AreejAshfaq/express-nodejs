

const http = require("http");

const fs = require("fs");

const url = require("url");

const express = require("express");

const app = express();

const server = http.createServer(app);

app.get("/", (req, res) => {

res.send("Hello, I am Areej");

});

app.get("/about", (req, res) => {

res.send("Zimal is here" + " " + req.query.name + " " + req.query.id); });


     
server.listen(2224,() => {
    console.log("server is listening too......")
});
