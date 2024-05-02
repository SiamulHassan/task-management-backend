const Task = require("../model/taskModel");

const getOverviewController = async (req, res) => {
  const task = await Task.find();
  res.status(200).json({ task });
};
module.exports = getOverviewController;
