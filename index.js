const express = require("express")

let app = express();

// normally you'd just do this, but vercel is supposed to be able to
// serve these static files
// app.use(express.static("public"));

app.get("*", (req, res) => {
  let mod = require("./dynamic.js");
  let stuff = mod.stuff();
  let page = `<!doctype html>
    <html>
    <head>
    <title>yo</title>
    <link rel="stylesheet" href="/build/index.css" />
    </head>
    <body>
    ${stuff}`
  res.set("content-type", "text/html")
  res.end(page)
})

module.exports = app
