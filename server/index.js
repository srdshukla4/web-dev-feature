const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async(req, res) => {
    let image = await axios('https://source.unsplash.com/random'); //using axios to get image fom unsplash
    res.send(`<h1 align="centre">Please Click <a href = "../index.html" >here</a> 
    to go to home </h1><img src="${image.request.res.responseUrl}" />`);
});

app.listen(1111, () => {
    console.log("Listening on 8080");
});