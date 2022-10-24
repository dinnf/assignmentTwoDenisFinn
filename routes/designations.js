const express = require('express')
const router = express.Router()
const Designation = require('../models/Designation')
router.get('/', async (req,res) =>{
    try {
        const designations = await Designation.find()
        res.json(designations)
    }
    catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.get('/:id',getDesignation, (req,res) => {
    res.json(res.designation)
})
router.post('/', async (req,res) => {
    const designation = new Designation({
        designationname:req.body.designationname,
        description:req.body.description, 
    })
    try {
    const newDesignation = await designation.save()
    res.status(201).send(newDesignation)
    }
    catch(err) {
        res.status(400).json({message:err.message})

    }
})
router.patch('/:id',getDesignation, async (req,res) => {
    if (req.body.designationname != null) {
        res.designation.designationname = req.body.designationname
    }
    if (req.body.description != null) {
        res.designation.description = req.body.description
    }
    try {
        const updatedDesignation = await res.designation.save()
        res.json(updatedDesignation)
    }
    catch(err) {
        res.status(400).json({message: err.message})

    }
    
})
router.delete('/:id',getDesignation,async (req,res) => {
    try {
        await res.designation.remove()
        res.json({message:"Deleted designation"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
async function getDesignation(req,res,next){
    let designation
    try {
        designation = await Designation.findById(req.params.id)
        if (designation === null){
            return res.status(404).json({message:"cannot find designation"})
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.designation=designation
    next()
}
module.exports = router