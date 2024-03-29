import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Task Added Successfully",
  });
};

export const getMytask = async (req, res) => {
  const userid = req.user._id;
  const tasks = await Task.find({ user: userid });
  res.status(201).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(id);
  if(!task) return next(new ErrorHandler("Task not found",404))

  task.isCompleted = !task.isCompleted;
  await task.save();
  res.status(201).json({
    success: true,
    message: "task updated",
  });
};

export const deleteTask = async (req, res, next) => {
  const id = req.params.id;

  const task = await Task.findById(id);
 if(!task) return next(new ErrorHandler("Task not found",404))
  await task.deleteOne();


  res.status(201).json({
    success: true,
    message: "task deleted",
  });
};
