const mongoose = require("mongoose");
const taskModelSchema = new mongoose.Schema({
  taskName: {
    type: String,
    // handle them after geting it from fontend so that empty data is not crated, so required raklam na
  },
  taskDescription: {
    type: String,
    // handle them after geting it from fontend so that empty data is not crated, so required raklam na
  },
  deadline: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },

  assignMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
});
const TaskModel = mongoose.model("TaskModel", taskModelSchema);
module.exports = TaskModel;
