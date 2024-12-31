const taskModel = require("../models/TaskModel");
const mongoose=require("mongoose");
// to create a task -post
const createTask = async (req, res) => {
    const { title,description} = req.body;

    try{
    const task = await taskModel.create({ title, description });
    res.status(200).json(task);
    }catch (e) {
     res.status(400).json({error: e.message});
    }
};

// to get all tasks -get
const getTasks = async(req,res)=>{
    try{
        const tasks = await taskModel.find({});
        res.status(200).json(tasks)
    }catch (e) {
        res.status(400).json({error: e.message});
    }
}
// to get a Single task - Get
const getSingleTask = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Task not found'
        });
    }
    try {
        const singeTask = await taskModel.findById(id)
        res.status(200).json(singeTask)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

//to update a task - PATCH
const updatTask = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Task not found'
        });

    }
    try {
        const task = await taskModel.findByIdAndUpdate({ _id: id }, {...req.body });
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

//Delete task - Delete
const deleteTask = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'Task not found'
        });
 
    }
    try {
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
 
};
module.exports = {createTask,getTasks,getSingleTask,updatTask,deleteTask};