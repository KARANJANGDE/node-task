
const express=require('express');
const mongoose = require ('mongoose');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT=4050;




//require Routes
const taskRoutes=require('./Routes/taskRoutes')
const categoryRoutes=require('./Routes/categoryRoutes')


//use Routes
app.use("/api",taskRoutes);
app.use('/api2',categoryRoutes);

const db=mongoose.connect("mongodb://127.0.0.1:27017/node-task",{
   
});

db.then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log("Err",err);
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})