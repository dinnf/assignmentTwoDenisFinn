const express = require('express')
const app = express()
const port = 3000
app.listen(port,()=> {
    console.log('Listening at port 3000')
})
app.use(express.json())
const employeesRouter = require('./routes/employees') 
const departmentsRouter = require('./routes/departments')
const designationsRouter = require('./routes/designations')
app.use('/employees',employeesRouter)
app.use('/departments',departmentsRouter)
app.use('/designations',designationsRouter)

let dbConnect = require("./dbConnect")