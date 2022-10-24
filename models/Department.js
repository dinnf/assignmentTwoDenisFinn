const mongoose = require('mongoose')
const Schema = mongoose.Schema
const departmentSchema = new Schema({
    departmentname:{
        type:String,
        required:true
    },
    departmenthead:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Department',departmentSchema)