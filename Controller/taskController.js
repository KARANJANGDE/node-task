const taskModel = require("../Model/taskModel");


const createTask = async (req, res) => {
  try {
    
    const task = await taskModel.create(req.body);
    if(task){
        res.status(201).json({
          status: "success",
          data: task,
        });
    }
    else{
        res.status(500).json({
            message:"Task not added"
        })
    }
  } catch (err) {
    res.status(500).json({
      status: "Error Adding Task",
      error:err,
    });
  }
};

const retriveTask=async(req,res)=>{
   try {
    const task=await taskModel.find({completed:"true"}).populate('category')
    res.status(200).json({
        status:"success",
        data:task
    })
    
   } catch (error) {
    res.status(500).json({
        status:"error fetching task",
        error:error
    })
   }
}
const editTask=async(req,res)=>{
    const id=req.params.id;
    try {
        const task=await taskModel.findByIdAndUpdate(id,req.body)
        if(task){
            res.status(200).json({
                status:"Updated successfully",
            })
        }
        else{
            res.status(500).json({
                status:"error updating task",
                error:error
            })
        }
        
    } catch (error) {
        
    }
}

const deleteTask=async(req,res)=>{
    const id=req.params.id;
    try {
        const task=await taskModel.findByIdAndDelete(id)
        if(task){
            res.status(200).json({
                status:"Deleted successfully",
            })
        }
        
        
    } catch (error) {
 
            res.status(500).json({
                status:"error deleting task",
                error:error
            })
    }
}

module.exports={
    createTask,
    retriveTask,
    editTask,
    deleteTask
}