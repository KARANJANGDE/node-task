const categoryModel=require('../Model/categoryModel');


const createCategory=async(req,res)=>{
    try {
        const category=await categoryModel.create(req.body)
        if(category){
            res.status(201).json({
                status:"success",
                data:category
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message:"Fail to Create Category",
            error:error
        })
    }
}

module.exports={
    createCategory
}