const express = require("express");
const app = express();
const winston = require("winston");
const expressWinston = require("express-winston");
const ContentRouter = require("./routers/ContentRouter");
const Quotes = require("./routers/Quotes");

const CDN = "/resources";

if (process.env.NODE_ENV !== "test") {
    app.use(
        expressWinston.logger({
            transports: [new winston.transports.Console()],
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
            meta: true, // optional: control whether you want to log the meta data about the request (default to true)
            msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
            expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
            colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
            ignoreRoute: function (req, res) {
                return false;
            }, // optional: allows to skip some log messages based on request and/or response
        })
    );
}

app.use("/resources", express.static("static", {}));

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="${CDN}/style.css" />
    </head>
    <body><h1>Sup</h1></body>`);
});

app.use("/quotes", Quotes);
app.use(ContentRouter);

app.get("/500-error", () => {
    throw new Error("Snap!");
});

app.use(
    expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    })
);

module.exports = app;
