const express = require('express')
const router = express.Router()
const Department = require('../models/Department')
router.get('/', async (req,res) =>{
    try {
        const departments = await Department.find()
        res.json(departments)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.get('/:id',getDepartment, (req,res) => {
    res.json(res.department)
})
router.post('/', async (req,res) => {
    const department = new Department({
        departmentname:req.body.departmentname,
        departmenthead:req.body.departmenthead, 
    })
    try {
    const newDepartment = await department.save()
    res.status(201).send(newDepartment)
    }
    catch(err) {
        res.status(400).json({message:err.message})

    }
})
router.patch('/:id',getDepartment, async(req,res) => {
    if (req.body.departmentname != null) {
        res.department.departmentname = req.body.departmentname
    }
    if (req.body.departmenthead != null) {
        res.department.departmenthead = req.body.departmenthead
    }
    try {
        const updatedDepartment = await res.department.save()
        res.json(updatedDepartment)
    }
    catch(err) {
        res.status(400).json({message: err.message})

    }
})
router.delete('/:id',getDepartment,async (req,res) => {
    try {
        await res.department.remove()
        res.json({message:"Deleted department"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
async function getDepartment(req,res,next){
    let department
    try {
        department = await Department.findById(req.params.id)
        if (department === null){
            return res.status(404).json({message:"cannot find department"})
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.department=department
    next()
}
module.exports = router