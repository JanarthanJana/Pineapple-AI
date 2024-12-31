const express = require("express");


const router = express.Router();
const { createTask, getTasks, getSingleTask, updatTask, deleteTask } = require('../controllers/taskController');

router.post("/", createTask);
router.get("/", getTasks);
router.get('/:id',getSingleTask);
router.patch('/:id', updatTask);
router.delete('/:id', deleteTask);
module.exports = router;