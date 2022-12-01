const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;
