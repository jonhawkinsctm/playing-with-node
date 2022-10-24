const express = require("express");
const ContentRouter = express.Router();

ContentRouter.get("/health", (req, res) => {
    res.send("ok");
});

module.exports = ContentRouter;
