
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./src/models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")
// mongoose.connect("mongodb+srv://bavic97:primexcapital@cluster0.wpntjrm.mongodb.net/employee")

app.post('/login', (req, res) =>{
    const {email, password} = req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post('/signup', (req, res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(error => res.json(error))
})

app.listen(3001, () => {
    console.log("server is running")
})