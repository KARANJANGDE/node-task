const taskController=require('../Controller/taskController');
const router=require('express').Router();


router.post('/task',taskController.createTask);
router.get('/task',taskController.retriveTask);
router.put('/task/:id',taskController.editTask);
router.delete('/task/:id',taskController.deleteTask);

module.exports=router;