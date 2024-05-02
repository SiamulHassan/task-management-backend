const Task = require("../model/taskModel");

const deleteOverviewController = async (req, res) => {
  const myId = req.params.id;
  await Task.findByIdAndDelete({ _id: myId });
};
module.exports = deleteOverviewController;
