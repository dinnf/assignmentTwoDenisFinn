const mongoose = require('mongoose')
const Schema = mongoose.Schema
const designationSchema = new Schema({
    designationname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Designation',designationSchema)