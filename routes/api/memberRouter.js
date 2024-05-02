const express = require("express");
const membersController = require("../../controller/membersController");
const getMembersController = require("../../controller/getMembersController");
const membersRouter = express.Router();

membersRouter.post("/create-members", membersController);
membersRouter.get("/create-members", getMembersController);

module.exports = membersRouter;
