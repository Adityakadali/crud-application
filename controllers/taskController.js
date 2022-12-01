const TaskModel = require("../models/taskModel");

/**
 * @openapi
 * /:
 * /tasks:
 *   get:
 *     description: Gets all tasks in database
 *     responses:
 *       200:
 *         description: returns all tasks in database as an object.
 *       500:
 *         description: server error
 */

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

/**
 * @openapi
 * /:
 * /tasks:
 *   post:
 *     description: Adds task to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               task:
 *                 type: string
 *             required:
 *               - task
 *     responses:
 *       200:
 *         description: returns success message with the added task.
 *       400:
 *         description: task cannot be empty
 *       500:
 *         description: server error
 */

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

/**
 * @openapi
 * /:
 * /tasks:
 *   put:
 *     description: edit tasks in database
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               updatedTask:
 *                 type: string
 *             required:
 *               - id
 *               - updatedTask
 *     responses:
 *       200:
 *         description: returns success message with the edited task.
 *       400:
 *         description: id or task cannot be empty
 *       500:
 *         description: server error
 */

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

/**
 * @openapi
 * /:
 * /tasks:
 *   delete:
 *     description: edit tasks in database
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: returns success message with the deleted task.
 *       400:
 *         description: id or task cannot be empty
 *       500:
 *         description: server error
 */

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
