let tasks = [];

exports.getTasks = (req,res)=>{
    res.json(tasks);
}

exports.createTask = (req,res)=>{
    if (!req.body.title) {
        return res.status(400).json({ error: "Title is required" });
    } 

    const task = {
        id:Date.now(),
        title:req.body.title,
        status:req.body.status || 'pending'
    }

    tasks.push(task)
    res.json(task);
}

exports.deleteTask = (req,res)=>{
    const id = req.params.id;
    tasks=tasks.filter(task=>task.id !== Number(id));
    res.json({message:"Task Deleted"});
}

exports.updateTask = (req,res)=>{
    const id = req.params.id;
    tasks=tasks.map(task=>{
        task.id==id?{...task,...req.body}:task
    });
    res.json({message:"Task Updated"});
}