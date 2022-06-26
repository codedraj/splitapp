const Task = require("./tasks.schema");

const getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

const updateTask = async (_id, data) => {
  const query = {
    _id,
  };
  const task = await Task.findOneAndUpdate(query, data, {
    new: true,
  });
  return task;
};

const deleteTask = async (_id) => {
  const query = {
    _id,
  };
  const task = await Task.findByIdAndDelete(query, (err) => {
    if (err) {
      console.log("failed to delete");
      console.log(err.message);
    } else {
      console.log("deleted doc with id " + _id);
    }
  });
  return task;
};

const addTask = async (data) => {
  const newTask = new Task(data);
  const results = await newTask.save();
  return results;
};

module.exports = {
  getAllTasks,
  updateTask,
  deleteTask,
  addTask,
};
