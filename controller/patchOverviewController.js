const Task = require("../model/taskModel");

const patchOverviewController = async (req, res) => {
  const { id } = req.body;
  const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  // console.log(updatedTask)
};
module.exports = patchOverviewController;
