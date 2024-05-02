const express = require("express");
const overviewRouter = require("./overviewRouter");
const membersRouter = require("./memberRouter");
const apiRouter = express.Router();

// overview routes
apiRouter.use("/overview", overviewRouter);

// members
apiRouter.use("/members", membersRouter);

module.exports = apiRouter;
