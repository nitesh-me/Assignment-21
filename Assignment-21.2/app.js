const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Employee = require('./models/employee');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost/emp",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("jello world");
});


app.post('/',(req,res)=>{
    var newEmployee={
        ename: req.body.ename,
        departmant: req.body.departmant,
        designation: req.body.designation,
        salary: req.body.salary,
        city: req.body.city
    }
    Employee.create(newEmployee,(err, newEmp)=>{
        if(err){
            console.log(err);
            res.send(err.message);
        }
        else{
            res.send(newEmp);
        }
    })
})

app.listen(port,()=>{
    console.log('The app is running at port ',port);
})