const Task = require('../models/Task');

exports.getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
}

exports.createTask = async (req,res)=>{
    try{
        if(!req.body.title){
            res.status(400).json({
                error:"Title is required"
            });
        }
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);  
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
}

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      message: "Task deleted"
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({
      message: "Task updated"
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};