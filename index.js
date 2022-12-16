const express = require("express");
const app = express();
const port = 8080;

app.get(["/", "/home"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

/* const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const url = req.url;
    console.log(url);
    if (url === "/contact") {
      fs.readFile("contact-me.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (url === "/about") {
      fs.readFile("about.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (url === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(8080);*/
