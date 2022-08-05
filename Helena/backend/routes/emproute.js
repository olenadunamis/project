const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()


let employeeSchema = require('../Models/Employee')



//GET //POST //PUT //DELETE

//localhost:8000/create-employee
router.route('/create-employee').post((req,res,next)=>{
    employeeSchema.create(req.body,(error,data)=>{
        if(error)
        {
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})


//get EMP data
router.route('/').get((req,res)=>{
    employeeSchema.find((error,data)=>{
        if(error)
        {
            return next(error)
        }else{
            res.json(data)
        }
    })
})


module.exports = router