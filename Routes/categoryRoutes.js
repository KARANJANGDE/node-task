const categoryController=require('../Controller/categoryController');
const router=require('express').Router();
router.post('/category',categoryController.createCategory);

module.exports=router;