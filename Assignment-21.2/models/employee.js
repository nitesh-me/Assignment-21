const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    ename:String,
    department:String,
    designation:String,
    salary:{
        type:Number,
        max:50000,
        min:[3000, 'very less salary']
    },
    dataofJoining:{type:"Date",default:Date.now},
    city:String
});

module.exports = mongoose.model("Employee",employeeSchema);