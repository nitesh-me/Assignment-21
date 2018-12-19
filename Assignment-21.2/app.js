const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Employee = require('./models/employee');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
mongoose.connect("mongodb://localhost/emp",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var empdata =[
    {"ename":"Vinod","department":"Clerical staff","designation":"Fresher","salary":4000, "city":"bangalore"},
    {"ename":"Sunil","department":"Support staff","designation":"Fresher","salary":14000,"city":"california"},
    {"ename":"Sumit","department":"ops staff","designation":"Fresher","salary":40000,"city":"singapore"},
    {"ename":"kundan","department":"development staff","designation":"software developer","salary":35000, "city":"newyork,"},
    {"ename":"kapil","department":"management staff","designation":"manager","salary":31000,"city":"newyork,"},
    {"ename":"nitesh","department":"logistic staff","designation":"","salary":35000, "city":"delhi"},
    {"ename":"Hestin","department":"Clerical staff","designation":"Fresher","salary":32000,"city":"delhi"},
    {"ename":"Richa","department":"development staff","designation":"software developer","salary":4000, "city":"bangalore"},
    {"ename":"Kalpana","department":"Clerical staff","designation":"Fresher","salary":10000,"city":"california"},
    {"ename":"lalit","department":"development staff","designation":"software developer","salary":39000, "city":"newyork,"},
   
    
];

Employee.insertMany(empdata,(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

Employee.remove({"designation":"software developer"},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("designation with software developer   removed    ");
    }
})
// app.get('/',(req,res)=>{
//     res.send("jello world");
// });




// app.post('/',(req,res)=>{
//     var newEmployee={
//         ename: req.body.ename,
//         departmant: req.body.departmant,
//         designation: req.body.designation,
//         salary: req.body.salary,
//         city: req.body.city
//     }
//     Employee.create(newEmployee,(err, newEmp)=>{
//         if(err){
//             console.log(err);
//             res.send(err.message);
//         }
//         else{
//             res.send(newEmp);
//         }
//     })
// })

app.listen(port,()=>{
    console.log('The app is running at port ',port);
})