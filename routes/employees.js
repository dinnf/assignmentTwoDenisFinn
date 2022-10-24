const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')
router.get('/', async (req,res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.get('/:id',getEmployee, (req,res) => {
    res.json(res.employee)
})
router.post('/', async (req,res) => {
    const employee = new Employee({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        dateofbirth:req.body.dateofbirth,
        tel:req.body.tel,
        email:req.body.email,
        department:req.body.department,
        designation:req.body.designation
    })
    try {
    const newEmployee = await employee.save()
    res.status(201).send(newEmployee)
    }
    catch(err) {
        res.status(400).json({message:err.message})

    }
})
router.patch('/:id',getEmployee, async(req,res) => {
    if (req.body.firstname != null) {
        res.employee.firstname = req.body.firstname
    }
    if (req.body.lastname != null) {
        res.employee.lastname = req.body.lastname
    }
    if (req.body.dateofbirth != null) {
        res.employee.dateofbirth = req.body.dateofbirth
    }
    if (req.body.tel != null) {
        res.employee.tel = req.body.tel
    }
    if (req.body.email != null) {
        res.employee.email = req.body.email
    }
    if (req.body.department != null) {
        res.employee.department = req.body.department
    }
    if (req.body.designation != null) {
        res.employee.designation = req.body.designation
    }
    try {
        const updatedEmployee = await res.employee.save()
        res.json(updatedEmployee)
    }
    catch(err) {
        res.status(400).json({message: err.message})

    }
})
router.delete('/:id',getEmployee,async (req,res) => {
    try {
        await res.employee.remove()
        res.json({message:"Deleted employee"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
async function getEmployee(req,res,next){
    let employee
    try {
        employee = await Employee.findById(req.params.id)
        if (employee === null){
            return res.status(404).json({message:"cannot find employee"})
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.employee=employee
    next()
}
module.exports = router