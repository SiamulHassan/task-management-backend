const express = require("express");
const overViewController = require("../../controller/overViewController");
const getOverviewController = require("../../controller/getOverviewController");
const patchOverviewController = require("../../controller/patchOverviewController");
const deleteOverviewController = require("../../controller/deleteOverviewController");
const overviewRouter = express.Router();

overviewRouter.post("/create-overview", overViewController);
overviewRouter.get("/create-overview", getOverviewController);
overviewRouter.patch("/create-overview/:id", patchOverviewController);
overviewRouter.delete("/create-overview/:id", deleteOverviewController);
// /api/v1/overview/create-overview
module.exports = overviewRouter;
