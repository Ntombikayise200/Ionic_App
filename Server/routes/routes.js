const express =require('express');
const router=express.Router();
const controller=require('../controller/controller.js');



router.post('/questions',controller.submitQuestion);




module.exports=router;