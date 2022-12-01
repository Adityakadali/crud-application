const TaskModel = require("../models/taskModel");

const GetTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: err });
  }
};

const AddTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res
        .status(400)
        .json({ status: 400, message: "task cannot be empty" });
    }
    try {
      const Task = await TaskModel.create({
        task: task,
      });
      res.status(200).json({
        status: 200,
        message: "task created successfully",
        data: Task,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: 500, message: "server error", data: err });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: err });
  }
};

const EditTask = async (req, res) => {
  try {
    const { id, updatedTask } = req.body;
    if (!(id && updatedTask)) {
      return res.status(400).json({
        status: 400,
        message: "id or task cannot be empty",
        data: err,
      });
    }
    try {
      const task = await TaskModel.findByIdAndUpdate(id, {
        task: updatedTask,
      });
      res.status(200).json({
        status: 200,
        message: "task edited successfully",
        data: task,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: 500, message: "server error", data: err });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: err });
  }
};

const DeleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    try {
      const task = await TaskModel.findByIdAndDelete(id);
      res.status(200).json({
        status: 200,
        message: "task deleted successfully",
        data: task,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: 500, message: "server error", data: err });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: 500, message: "server error", data: err });
  }
};

module.exports = {
  GetTasks,
  AddTask,
  EditTask,
  DeleteTask,
};
