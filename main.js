

const http = require("http");
const fs = require("fs");
const url =  require("url");
const express = require("express");
const app = require("app");

const server = http.createServer(
);
app.get("/",(res,req) => {
     res.send("hellow i an areej")
    });
    app.get("about/",(res,req) => {
     res.send("zimal is here"+" " + req.query.name +" "+ req.query.id)
    });
     
server.listen(2224,() => {
    console.log("server is listening too......")
});
