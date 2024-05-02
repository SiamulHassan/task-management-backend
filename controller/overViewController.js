const TaskModel = require("../model/taskModel");
const overViewController = async (req, res) => {
  try {
    const {
      projectName,
      taskName,
      taskDescription,
      deadline,
      dueDate,
      assignMembers,
    } = req.body;

    const createdTask = await TaskModel.create({
      projectName,
      taskName,
      taskDescription,
      deadline: deadline,
      dueDate: dueDate,
      assignMembers: assignMembers || [],
    });
    res.status(200).json({
      data: createdTask,
    });
  } catch (error) {
    res.status(400).json({
      mess: error.message,
    });
  }
};

module.exports = overViewController;
