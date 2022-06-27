const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../tasks/tasks.controller");

router.get("/", async (req, res) => {
  res.json("Task Router Working");
});

router.get("/getAllTasks", async (req, res) => {
  try {
    const results = await controller.getAllTasks();
    res.json({ results, responseBool: true });
  } catch (error) {
    res.json({ results: error.message, responseBool: false });
  }
});

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { _id } = req.params;
    const results = controller.deleteTask(_id);
    res.json({ results, responseBool: true });
  } catch (error) {
    res.json({ results: error.message, responseBool: false });
  }
});

router.post("/newTask", async (req, res) => {
  try {
    const { data } = req.body;
    const results = await controller.addTask(data);
    res.json({ results, responseBool: !false });
  } catch (error) {
    res.json({ results: error.response, responseBool: false });
  }
});

router.put("/updateTask/", async (req, res) => {
  try {
    const { data, _id } = req.body;
    console.log(_id);
    const results = await controller.updateTask(_id, data);
    console.log(results);
    res.json({ results, responseBool: true });
  } catch (error) {
    res.json({ results: error.message, responseBool: !true });
  }
});

module.exports = router;
