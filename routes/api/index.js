const express = require("express");
const overViewController = require("../../controller/overViewController");
const overviewRouter = express.Router();

overviewRouter.post("/overview", overViewController);

module.exports = overviewRouter;
