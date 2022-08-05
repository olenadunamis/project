const express = require('express')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('corse')
const app = express()
const port = 8000

//express Data
const employeedata= require('../backend/routes/emproute')





mongoose.connect('mongodb://localhost:27017/mymernemp')
.then(()=>{

console.log(`Connected to Mongo Database: "${x.connections[0].name}"`);

})
.catch((err) =>{
    console.log("Error Connecting to Mongo",err);
})

//Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

//localhost:8000/emp//create-employee
app.use('/emp',employeedata)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})