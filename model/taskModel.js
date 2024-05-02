const mongoose = require("mongoose");
const taskModelSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  taskName: {
    type: String,
  },
  taskDescription: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  // taskId: {
  //   type: mongoose.Schema.Types.ObjectId,
  // },
  assignMembers: [String],
});
const Task = mongoose.model("Task", taskModelSchema);
module.exports = Task;
