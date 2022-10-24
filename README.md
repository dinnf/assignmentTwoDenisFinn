# assignmentTwoDenisFinn
Assignment 1

• Create an application with Node JS and MongoDB to manage
data of Employees, Departments, Designations of an
organization in mongoDB.
• Application should provide restful API’s to add, update, delete
and retrieve data.
• Data retrieval should have two end point, Once for single data
and other for list of data
• Postman will be used for data management

4 © 2022 Institute of Data

Assignment 1

• Endpoints should be like followings,
• http://localhost:3000/employee/:id
• http://localhost:3000/employee/add
• http://localhost:3000/employee/delete/:id
• http://localhost:3000/employee/update/:id
• Same for departments and designations.

5 © 2022 Institute of Data

Assignment 1

• Employee Data Specifications
FirstName, LastName, DataOfBirth, Phone, Email, Designation, Department,
{
”fistname": ”mike ",
”lastname": ”Webb ",
”dateofbirth": ”10-05-2001 ",
"tel": "032342242323",
"email": "sales@dairysolutionz.co.nz",
”department": "977df562a6b3db3c39cf4f91531edf51",
”designation": "32e85ec496d0ab6ccac5f83a239d9428"
}

6 © 2022 Institute of Data

Assignment 1

• Department Data Specifications

{
”departmentname": ”Technical",
”departmentHead": ”Julie Karl",
}

• Designation Data Specifications

{
”designationname": ”Manager",
”description": ”it will manage the team",
}
