const express = require("express");
const {
  AddTask,
  EditTask,
  GetTasks,
  DeleteTask,
} = require("../controllers/taskController");

const task = express.Router();

task.route("/").get(GetTasks).post(AddTask).put(EditTask).delete(DeleteTask);

module.exports = task;
