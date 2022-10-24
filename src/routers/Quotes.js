const express = require("express");
const starwars = require("starwars");
const Quotes = express.Router();

Quotes.get("/starwars", (req, res) => {
    res.send(starwars());
});

module.exports = Quotes;
