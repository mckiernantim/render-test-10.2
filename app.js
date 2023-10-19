const express = require("express");

const app = express();


const PUERTO = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("render is working!@#@!")
})

app.listen((PUERTO) => {
    console.log("live on PUERTO whatever");
})